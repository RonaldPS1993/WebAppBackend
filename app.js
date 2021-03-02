//make all config file fro DB private
require("dotenv").config();

const express = require("express");

//Set up express app
const app = express();

//Imported router from user router
const userRouter = require("./api/users/user.router");

//Imported router from wishlits router
const wishlistRouter = require("./api/wishlist/wishlist.router");

//Routes for API
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/wishlist",wishlistRouter);

//Start server
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});


