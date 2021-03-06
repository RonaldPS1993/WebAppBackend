//make all config file fro DB private
require("dotenv").config();


//preinstalled
const express = require("express");

//preinstalled to use express
const app = express();
//imported router from user router
const userRouter = require("./api/users/user.router");
const booksRouter = require("./api/book_browsing/books.router")
//if any request comes it will pass this to above router
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/book_browsing", booksRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});


