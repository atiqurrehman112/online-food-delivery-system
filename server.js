const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const orderRoutes = require("./routes/orders");

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Online Food Delivery</title>
        <style>
          body{
            font-family: Arial;
            text-align:center;
            padding:50px;
            background:#f8f8f8;
          }
          h1{
            color:#e63946;
          }
          .box{
            background:white;
            width:60%;
            margin:auto;
            padding:30px;
            border-radius:10px;
            box-shadow:0 0 10px rgba(0,0,0,0.1);
          }
        </style>
      </head>

      <body>
        <div class="box">
          <h1>🍔 Online Food Delivery Web Application</h1>
          <h2>Developed Using Node.js + Express.js + MongoDB</h2>
          <p>DevOps Engineering Lab Final Exam</p>
          <p>Student: Atiq Ur Rehman</p>
          <p>Server Status: Running Successfully on Port 3000 ✅</p>
        </div>
      </body>
    </html>
  `);
});

app.use("/api/orders", orderRoutes);

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/food_delivery")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});