const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({
    message: "Payment processed successfully",
    amount: req.body.amount,
    status: "Paid"
  });
});

module.exports = router;
