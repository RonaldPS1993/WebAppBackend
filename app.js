//make all config file fro DB private
require("dotenv").config();

//preinstalled
const express = require("express");

//preinstalled to use express
const app = express();
//imported router from user router
const userRouter = require("./api/users/user.router");
//if any request comes it will pass this to above router
app.use(express.json());
app.use("/api/users", userRouter);

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

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});


