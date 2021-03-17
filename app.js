//make all config file fro DB private
require("dotenv").config();

const express = require("express");
const cors = require("cors");

//Imported router from user router
const userRouter = require("./api/users/user.router");

//Imported router from cart router
const cartRouter = require("./api/cart/cart.router");

//Set up express app
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const session = require("express-session");


//Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ["GET","POST","PATCH", "DELETE", "PUT"],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//Routes for API
app.use("/api/users", userRouter);
app.use("/api/cart",cartRouter);
//Start server
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});


