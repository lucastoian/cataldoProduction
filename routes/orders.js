const { Order } = require("../models/order");
const { ProductVariant }= require("../models/productVariant");
const express = require("express");
const { OrderItem } = require("../models/order-item");
const { json } = require("express");
const nodemailer = require('nodemailer');
const router = express.Router();

router.get(`/`, async (req, res) => {
  try{

  console.log("******************************************************getting orders");

  const orderList = await Order.find()
    .populate("user", "name")
    .sort("dateOrdered");

  if (!orderList) {
    res.status(500).json({
      success: false,
    });
  }
  console.log("orderList = " + orderList);
  res.send(orderList);
}catch(e){
  res.status(500).json({
    success: false
})
}
});


router.get(`/byUser/:id`, async (req, res) => {
  try{


  console.log("user: " + req.params.id);
  const order = await Order.find({user: req.params.id});
  if (!order) {
    res.status(500).json({
      success: false,
    });
  }
  res.send(order);
}catch(e){
  res.status(500).json({
    success: false
})
}
 });
 


router.get(`/:id`, async (req, res) => {

try{
  const order = await Order.findById(req.params.id);

  console.log("*éé*é*é*é*é*é*é*é* ho trovato questo ordine: " + order);
    //.populate("user", "name")
    //.populate({
    //  path: "orderItems",
    //  populate: {
    //    path: "product",
    //    populate: "category",
    //  },
    //});
//
  if (!order) {
    res.status(500).json({
      success: false,
    });
  }
  res.send(order);
} catch(e){
  res.status(500).json({
    success: false
})
}
});




router.get("/get/totalsales", async (req, res) => {
  try{
  const totalSales = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalsales: {
          $sum: "$totalPrice",
        },
      },
    },
  ]);

  if (!totalSales) {
    return res.status(400).send("The order sales cannot be generated");
  }

  res.send({
    totalsales: totalSales.pop().totalsales,
  });
}catch(e){
  res.status(500).json({
    success: false
})
}
});

router.get(`/get/count`, async (req, res) => {
  try{
  const orderCount = await Order.countDocuments();

  if (!orderCount) {
    res.status(500).json({
      success: false,
    });
  }
  res.send({
    orderCount: orderCount,
  });
} catch(e){
  res.status(500).json({
    success: false
})
}
});

router.get(`/get/userorders/:userid`, async (req, res) => {
  try{
  const userOrderList = await Order.find({
    user: req.params.userid,
  })
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
        populate: "category",
      },
    })
    .sort({
      dateOrdered: -1,
    });

  if (!userOrderList) {
    res.status(500).json({
      success: false,
    });
  }
  res.send(userOrderList);
}catch(e){
  res.status(500).json({
    success: false
})
}
});

router.post("/", async (req, res) => {
  try{
  const orderItemsIds = Promise.all(
    req.body.orderItems.map(async (orderItem) => {
      let newOrderItem = new OrderItem({
        quantity: orderItem.quantity,
        product: orderItem.product,
        variant: orderItem.variant,
      });

      newOrderItem = await newOrderItem.save();

      return newOrderItem._id;
    })
  );
  const orderItemsIdsResolved = await orderItemsIds;

  const totalPrices = await Promise.all(
    orderItemsIdsResolved.map(async (orderItemId) => {
      const orderItem = await OrderItem.findById(orderItemId).populate(
        "product",
        "price"
      );
      const totalPrice = orderItem.product.price * orderItem.quantity;
      return totalPrice;
    })
  );

  const totalPrice = totalPrices.reduce((a, b) => a + b, 0);

  let order = new Order({
    orderItems: orderItemsIdsResolved,
    shippingAddress1: req.body.shippingAddress1,
    shippingAddress2: req.body.shippingAddress2,
    city: req.body.city,
    zip: req.body.zip,
    country: req.body.country,
    phone: req.body.phone,
    status: req.body.status,
    paymentOption: req.body.paymentOption,
    confirmed: req.body.confirmed,
    totalPrice: totalPrice,
    user: req.body.user,
  });
  order = await order.save();

  if (!order) return res.status(400).send("the order cannot be created!");

  res.send(order);
}catch(e){
  res.status(500).json({
    success: false
})
}
});

router.post("/createNewOrder", async (req, res) => {
  console.log("creating a new order ->" + JSON.stringify(req.body.order));
    let orderData = "";

    try{
    orderData = JSON.parse(req.body.order)
    }catch(e){
    orderData = req.body.order
    }

  try{
    console.log("creating a new order");
    let order = new Order({
      shippingAddress1: orderData.shippingAddress1,
      city: orderData.city,
      zip: orderData.zip,
      country: orderData.country,
      phone: orderData.phone,
      prefix: orderData.prefix,
      fullNumber: orderData.prefix+ orderData.phone,
      totalPrice: orderData.totalPrice,
      user: orderData.user,
      email: orderData.email,
      paymentOption: orderData.paymentOption,
      confirmed: orderData.confirmed,
      id: getRandomInt(9999999) * getRandomInt(9999999)
    });



    console.log("ho ricevuto2: " + JSON.stringify(orderData.orderItems));

    let items = orderData.orderItems;

    items.forEach(data => {
      let item = {id: data.id, quantity: data.selected, size: data.size, mainImg: data.mainProductImage, name: data.mainProductName, barcode: data.barcode};
     // console.log("*éç*°ç*éç°ç*éç§°ç*éç*°    item: " + JSON.stringify(item));
      order.items.push(item);
    });

    order = await order.save();

    if (!order){
      return res.status(400).send("the order cannot be created!");
    } else{

      items.forEach(async data => {
        console.log("QUESTA TAGLIA HA IN TUTTO " + data.maxInventory + " ARTICOLI   NE RIMUOVO " +  data.selected + "  QUINDI I NUOVI ARTICOLI SARANNO:  " + (data.maxInventory - data.selected))


        await ProductVariant.findByIdAndUpdate(
          data.id,
          {
            inventory: data.maxInventory - data.selected
          }
          );

       
      });

      var transporter = nodemailer.createTransport({
        host: "smtps.aruba.it",
        logger: true,
        debug:true,
        secure: true,
        port:465,
        auth: {
          user: "postmaster@cataldostore.it",
          pass: "Max.ol1966" 
        },
        tls:{
          minVersion: 'TLSv1',
          ciphers:'HIGH:MEDIUM:!aNULL:!eNULL:@STRENGTH:!DH:!kEDH'
        }
      })
      
      var mailOptions = {
        from: 'postmaster@cataldostore.it',
        to: req.body.email,
        subject: 'Conferma avvenuto ordine CataldoStore.it',
        html: '<h3>Conferma ordine numero: </h3>' + order._id + '<br> <h3>Indirizzo di spedizione: </h3>Paese: ' + req.body.order.country  + ' <br>Città: ' + req.body.order.city + ' <br>Zip: ' + req.body.order.zip + ' <br>Indirizzo: ' + req.body.order.shippingAddress1 + '<br><a href="https://cataldoproduction.herokuapp.com/#/orders/' +order._id +  '">Clicca per maggiori dettagli</a>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

      return res.status(200).send(order);
    }
    
  }catch(e){
    console.log("errore nella creazione di un nuovo ordine " + e);
    res.status(500).json({
      success: false,
      
  })
  }
    
});

router.put("/:id", async (req, res) => {
  try{
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
    },
    {
      new: true,
    }
  );
  if (!order) return res.status(400).send("the order cannot be updated");

  res.send(order);
  }catch(e){
    res.status(500).json({
      success: false
  })
  }
});

router.post("/delete", async (req, res) => {
  try{
    await Order.findByIdAndRemove(req.body.orderId);
  
    res.sendStatus(200);
  
  
    }catch(e){
      res.status(500).json({
        success: false
    })
    }
  });

  router.post("/findUnconfirmedOrders", async (req, res) => {

    console.log("certo di trovare gli ordini unconfirmed: " + req.body.fullNumber);
  
    const filter = { 
      fullNumber: req.body.fullNumber,
      confirmed: false,
      paymentOption: 'Contanti' 
  };
  
    try{
        Order.find(filter).exec(function (err, results) {
        var count = results.length
  
  
        res.status(200).json({
          count: count
      })
      
      });
    
  
    
    
      }catch(e){
        res.status(500).json({
          success: false
      })
      }
    });
  

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = router;
