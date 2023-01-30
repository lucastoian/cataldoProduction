const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('908804749713-9q67kslreerltag8jpsi7tadf845mms6.apps.googleusercontent.com');

//Retrieve all users
router.get(`/`, async (req, res) => {
    try{
    const usersList = await User.find().select('name lastName userName email');

    if (!usersList) {
        res.status(500).json({
            success: false
        })
    }
    res.send(usersList);
}catch(e){
    res.status(500).json({
        success: false
    })
}
})

router.post('/google', async (req,res)=>{
    console.log(req.body)
 
 
    const ticket = await client.verifyIdToken({
     idToken: req.body.credential,
     audience: '908804749713-9q67kslreerltag8jpsi7tadf845mms6.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
     // Or, if multiple clients access the backend:
     //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
 });
 const payload = ticket.getPayload();
 const userid = payload['sub'];
 console.log(payload)
 let user = await User.findOne({email: payload['email']})
 console.log(user)
 const secret = process.env.secret;

let givenName = ""
let givenLastName = ""
let givenUserName = ""
let givenEmail= ""
let passwordHash="" 

try{
    givenName =payload['given_name']
} catch(e){

}
try{
    givenLastName =payload['given_name']
} catch(e){

}
try{
    givenUserName =payload['given_name']
} catch(e){

}
try{
    givenEmail =payload['given_name']
} catch(e){

}
     if(user == null){
         let newUser = new User({
            platform: 'google',
            externalId: '',
             name: givenName,
             lastName: givenLastName,
             userName: givenUserName,
             email: givenEmail,
             passwordHash: payload['sub'],
             phone: '',
             isAdmin: false,
             street: '',
             apartment: '',
             zip: '',
             city: '',
             country: ''
         })
         user = await newUser.save();
         if (!user){
             return res.status(400).send('the user cannot be created!')
         }
     }
 const tokenN = jwt.sign(
     {
      userId: user.id,
      isAdmin: user.isAdmin,
      country: user.country,
      address1 : user.address1,
      address2 : user.address2,
      dateOfBirth : user.dateOfBirth,
      email: user.email,
      phone: user.phone,
      postalCode: user.postalCode,
      sex: user.gender,
      gender: user.gender,
      fName: user.name,
      lName: user.lastName,
      region: user.region,
      city: user.city,
      state: user.state,
      prefix: user.prefix,
      platform: user.platform,
      externalId: user.externalId
 
     },
     secret,
     {expiresIn: '1d'}
 )
 
 res.status(200).send({user: user.email , token: tokenN})
 
 })
//Retrieve a specific user using its id
router.get(`/:id`, async(req,res)=>{
    try{
    const user = await User.findById(req.params.id).select('-passwordHash');

    if(!user){
        res.status(500).json({message: 'ID not found'})
    }
    res.status(200).send(user);
}catch(e){
    res.status(500).json({
        success: false
    })
}
})

//Count all users
router.get(`/get/count`, async (req, res) => {
    try{
    User.countDocuments().then(count => {
        if (count) {
            return res.status(200).json({
                usersCount: count
            });
        } else {
            return res.status(500).json({
                success: false
            });
        }
    }).catch(err => {
        return req.status(400).json({
            success: false,
            error: err
        })
    });
}catch(e){
    res.status(500).json({
        success: false
    })
}
})


//Create a new user
router.post('/', async (req,res)=>{
    try{
    let user = new User({
            name: req.body.name,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.password, 10),
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
    })
    user = await user.save();

    if (!user)
        return res.status(400).send('the user cannot be created!')

    res.send(user);
}catch(e){
    res.status(500).json({
        success: false
    })
}
})


//Users authentication
router.post('/login', async (req,res)=>{
    try{
    const user =  await User.findOne({email: req.body.email})
    const secret = process.env.secret;

    if(!user){
        return res.status(400).send('User not found')
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)){
       const token = jwt.sign(
           {
            userId: user.id,
            isAdmin: user.isAdmin,
            country: user.country,
            address1 : user.address1,
            address2 : user.address2,
            dateOfBirth : user.dateOfBirth,
            email: user.email,
            phone: user.phone,
            postalCode: user.postalCode,
            sex: user.gender,
            gender: user.gender,
            fName: user.name,
            lName: user.lastName,
            region: user.region,
            city: user.city,
            state: user.state,
            prefix: user.prefix

           },
           secret,
           {expiresIn: '1d'}
       )
       res.status(200).send({user: user.email , token: token})

    }else{
        res.status(400).send('wrong password');
    }

}catch(e){
    res.status(500).json({
        success: false
    })
}
})

router.post('/register', async (req, res) => {
    try{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
        phone: req.body.phone,
        isAdmin: false,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
        address1: req.body.address1,
        address2: req.body.address2,
        dateOfBirth: req.body.dateOfBirth,
        postalCode: req.body.postalCode,
        gender: req.body.sex,
        fName: req.body.fName,
        lName: req.body.lastName,
        lastName: req.body.lastName,
        region: req.body.region,
        state: req.body.state,
        prefix: req.body.prefix

    })
    user = await user.save();

    if (!user)
        return res.status(404).send('the user cannot be created');

        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin,
                country: user.country,
                address1 : user.address1,
                address2 : user.address2,
                dateOfBirth : user.dateOfBirth,
                email: user.email,
                phone: user.phone,
                postalCode: user.postalCode,
                sex: user.gender,
                gender: user.gender,
                fName: user.name,
                lName: user.lastName,
                region: user.region,
                city: user.city,
                state: user.state,
                prefix: user.prefix
 
            },
            process.env.secret,
            {expiresIn: '1d'}
        )
        res.status(200).send({user: user.email , token: token})
    }catch(e){
        res.status(500).json({
            success: false
        })
    }

})


router.put(`/:id`, async (req,res)=>{
    try{

    console.log("OAISDJPAOAPèSKJDNAPOSUIDNAPSUDN UPDATING USER" );

  const userExist = await User.findById(req.params.id);
  let newPassword;
  if (req.body.password) {
      newPassword = bcrypt.hashSync(req.body.password, 10)
  } else {
      newPassword = userExist.passwordHash;
  }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
         name: req.body.fName,
         lastName: req.body.lName,
         region: req.body.region,
         postalCode: req.body.postalCode,
         address1: req.body.address1,
         address2: req.body.address2,
         dateOfBirth: req.body.date,
         userName: req.body.fName + req.body.lastName,
         email: req.body.email,
         passwordHash: newPassword,
         phone: req.body.phone,
         isAdmin: false,
         street: req.body.street,
         apartment: req.body.apartment,
         zip: req.body.zip,
         city: req.body.city,
         country: req.body.country,
         gender: req.body.sex,
         prefix: req.body.prefix
        },
        {new: true}
    )

        if (!user){

            return res.status(400).send('the user cannot be created!');
        }

        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin,
                country: user.country,
                address1 : user.address1,
                address2 : user.address2,
                dateOfBirth : user.dateOfBirth,
                email: user.email,
                phone: user.phone,
                postalCode: user.postalCode,
                sex: user.gender,
                gender: user.gender,
                fName: user.name,
                lName: user.lastName,
                region: user.region,
                city: user.city,
                state: user.state,
                prefix: user.prefix
 
            },
            process.env.secret,
            {expiresIn: '1d'}
        )
        res.status(200).send({user: user.email , token: token})
    }catch(e){
        res.status(500).json({
            success: false
        })
    }
        
})

router.delete('/:id', (req, res) => {
    try{
    User.findByIdAndRemove(req.params.id).then(user => {
        if (user) {
            return res.status(200).json({
                success: true,
                message: 'user deleted'
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'user cannot be deleted'
            });
        }
    }).catch(err => {
        return res.status(400).json({
            success: false,
            error: err
        });
    })
}catch(e){
    res.status(500).json({
        success: false
    })
}
})


module.exports = router;