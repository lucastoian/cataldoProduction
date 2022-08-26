const { Order } = require("../models/order");
const express = require("express");
const { OrderItem } = require("../models/order-item");
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
  try{
    console.log("creating a new order");
    let order = new Order({
      shippingAddress1: req.body.order.shippingAddress1,
      city: req.body.order.city,
      zip: req.body.order.zip,
      country: req.body.order.country,
      phone: req.body.order.phone,
      totalPrice: req.body.order.totalPrice,
      user: req.body.order.user,
      email: req.body.email
    });


    let items = req.body.order.orderItems;

    items.forEach(data => {
      let item = {id: data.id, quantity: data.selected, size: data.size, mainImg: data.mainProductImage, name: data.mainProductName, barcode: data.barcode};
      console.log("*éç*°ç*éç°ç*éç§°ç*éç*°    item: " + JSON.stringify(item));
      order.items.push(item);
    });

    order = await order.save();

    if (!order){
      return res.status(400).send("the order cannot be created!");
    } else{
      return res.sendStatus(200);
    }
    
  }catch(e){
    res.status(500).json({
      success: false,
      error: e
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

router.delete("/:id", (req, res) => {
  try{
  Order.findByIdAndRemove(req.params.id)
    .then(async (order) => {
      if (order) {
        await order.orderItems.map(async (orderItem) => {
          await OrderItem.findByIdAndRemove(orderItem);
        });
        return res.status(200).json({
          success: true,
          message: "order deleted",
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "order was not found",
        });
      }
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: err,
      });
    });
  }catch(e){
    res.status(500).json({
      success: false
  })
  }
});

module.exports = router;
