const express = require ('express');
const router = express.Router();


router.get(`/register`, async(req,res)=>{
    console.log("Register");
    res.sendStatus(200);
})

module.exports = router;