const express = require("express");
const bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const stripe = require("stripe")("sk_test_51LYUCGDEyiX3e3PlOF9sfkE3RE3eyjDbq9kzY39MZmErzUDUKIfURmQ7raSXznjlT1gQP6hUI8VBraRlzZzp6EW700HHZP3bpO");
const cors = require('cors')

app.use(cors())

app.post('/checkout', async(req, res) => {

  //console.log("amount: " + req.body.amount);

  try {
      console.log(req.body);
      token = req.body.token
    const customer = stripe.customers
      .create({
        email: req.body.email,
        address: {
          city: req.body.city,
          country: req.body.country,
          line1: req.body.address1,
          postal_code: req.body.postalCode,
          state: req.body.state

        },
        name: req.body.fName + " " + req.body.lName,
        phone: req.body.prefix + req.body.phone,
        source: token.id
      })
      .then((customer) => {
        console.log(customer);
        return stripe.charges.create({
          amount: req.body.amount * 100,
          description: "Cataldo Store",
          currency: "USD",
          customer: customer.id,
        });
      })
      .then((charge) => {
        console.log("charge : " + charge);
          res.json({
            data:"success"
        })
      })
      .catch((err) => {
        console.log("error : " + err);
          res.json({
            data: "failure",
          });
      });
    return true;
  } catch (error) {
    return false;
  }
});
module.exports = app; 