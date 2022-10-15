
const express = require("express");
const router = express.Router();



const accountSid = 'ACaabb761613b479c978d80b22ecc63f82';
const authToken = 'eb52a29ca810248fc796ca3fb29f50d1';
const client = require('twilio')(accountSid, authToken);





router.get(`/send`, async (req,res)=>{
    client.messages
    .create({
        body: 'Hi there', 
        from: '+12059474811', 
        to: '+393482115991',
        statusCallback: 'https://cataldoproduction.herokuapp.com/api/v1/sms/recive'
})
    .then(message => console.log(message.sid));
    });
      


    router.get(`/recive`, async (req,res)=>{

        console.log(JSON.stringify(req.body));

    });
             

module.exports = router;
