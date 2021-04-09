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
<<<<<<< HEAD
app.use("/api/cart",cartRouter);
=======

<<<<<<< HEAD
//Handling CORS errors
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header(
  "Access-Control-Allow-Headers", 
  "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
//bookdetails route
const bookDetailsRoute = require("./api/bookDetails/bookDetails.router");
app.use('/bookDetails', bookDetailsRoute);

=======

>>>>>>> 62f3c414f77f33e93d0fd479084008763fbc178b
//Start server
>>>>>>> 7ee4c96634f621388ed6cddba970594c5bbe48d5
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});


