const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/products.route.js");
const app = express();
const connString =
  "mongodb+srv://tarunghawri7:Pem4OxnhKOBxlGro@cluster0.ho0cd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0";

// Middlewares //
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Hello dude successfully created node API😎👍🏻");
});

// Connecting to the mongoDB Atlas database
mongoose
  .connect(connString)

  .then(() => {
    console.log("MongoDB is Connected!😎👍🏻♾️");
    app.listen(3000, () => {
      console.log("server is running on PORT 3000 🌐");
    });
  })
  .catch(() => {
    console.log("Connection Failed☹️");
  });
