const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');


//Retrieve all users
router.get(`/`, async (req, res) => {
    const usersList = await User.find().select('name lastName userName email');

    if (!usersList) {
        res.status(500).json({
            success: false
        })
    }
    res.send(usersList);
})


//Retrieve a specific user using its id
router.get(`/:id`, async(req,res)=>{
    const user = await User.findById(req.params.id).select('-passwordHash');

    if(!user){
        res.status(500).json({message: 'ID not found'})
    }
    res.status(200).send(user);
})

//Count all users
router.get(`/get/count`, async (req, res) => {
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
})


//Create a new user
router.post('/', async (req,res)=>{
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
})


//Users authentication
router.post('/login', async (req,res)=>{
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


})

router.post('/register', async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
        address1: req.body.address1,
        address2: req.body.address2,
        dateOfBirth: req.body.dateOfBirth,
        postalCode: req.body.postalCode,
        gender: req.body.gender,
        fName: req.body.fName,
        lName: req.body.lName,
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
                fName: user.fName,
                lName: user.lName,
                region: user.region,
                city: user.city,
                state: user.state,
                prefix: user.prefix
 
            },
            process.env.secret,
            {expiresIn: '1d'}
        )
        res.status(200).send({user: user.email , token: token})

})


router.put(`/:id`, async (req,res)=>{

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
         name: req.body.name,
         lastName: req.body.lastName,
         userName: req.body.userName,
         email: req.body.email,
         passwordHash: newPassword,
         phone: req.body.phone,
         isAdmin: req.body.isAdmin,
         street: req.body.street,
         apartment: req.body.apartment,
         zip: req.body.zip,
         city: req.body.city,
         country: req.body.country,
        },
        {new: true}
    )

        if (!user){

            return res.status(400).send('the user cannot be created!');
        }

        res.send(user);
})

router.delete('/:id', (req, res) => {
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
})


module.exports = router;