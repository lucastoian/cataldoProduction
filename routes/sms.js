
const express = require("express");
const router = express.Router();
const { Order } = require("../models/order");


const accountSid = 'ACaabb761613b479c978d80b22ecc63f82';
const authToken = 'eb52a29ca810248fc796ca3fb29f50d1';
const client = require('twilio')(accountSid, authToken);





router.post(`/send`, async (req,res)=>{

    try{
    let orderId = req.body.orderId;
    let clientNumber = req.body.clientNumber;
    let clientPrefix = req.body.clientPrefix;
    console.log("cerco di mandare un sms a questo numero: " + '+' + clientPrefix + clientNumber);

    client.messages
    .create({
        body: 'Hi there', 
        from: '+12059474811', 
        to: '+' + clientPrefix + clientNumber,
        statusCallback: 'https://cataldoproduction.herokuapp.com/api/v1/sms/recive'
})
    .then(message => console.log(message.sid));
    res.sendStatus(200);
}catch(e){
    console.log("errore nel'invio dell'sms " + e);
    res.status(500).json({
      success: false,
      
  })
}
    });
      


 
    router.post(`/recive`, async (req,res)=>{


        
        console.log("ho ricevuto questo messaggio : " + JSON.stringify(req.body) );

        let smsStatus = req.body.SmsStatus;
        let body = req.body.Body;

        if(smsStatus == 'received' && (body == 'SI' || body =='si' || body == 'Si')){
            console.log("Ho ricevuto un messaggio");
            let from = req.body.From;
            from = from.substring(1);

            console.log("from = " + from);

            const order = await Order.findOneAndUpdate({
                query: {
                    fullNumber: from,
                    confirmed: false,
                    paymentOption : 'contanti'
                    },
                sort: {$natural: 1},
                update: {$set: {confirmed: true}}


             })


            console.log("updated order = " + order);

        }

        res.sendStatus(200);

    });


    router.post(`/failed`, async (req,res)=>{

        console.log("errore nel ricevere il messaggio: " + JSON.stringify(req.body) );
        res.sendStatus(200);

    });
             

module.exports = router;
