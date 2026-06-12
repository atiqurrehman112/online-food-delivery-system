const express = require("express");
const router = express.Router();

let orders = [];

router.post("/", (req, res) => {
  const order = {
    id: orders.length + 1,
    customerName: req.body.customerName,
    foodItem: req.body.foodItem,
    price: req.body.price,
    status: "Pending"
  };

  orders.push(order);
  res.status(201).json(order);
});

router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;