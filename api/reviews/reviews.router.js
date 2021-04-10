//Imported controllers
const { 
    getComments,
    getBooks,
    writeComment,
    getAverage,
   
    } = require("./reviews.controller");
const router = require('express').Router();
const { checkToken } = require("../../auth/token_validation");
//const { getAverage } = require("./reviews.service");

//Define all routes for review


router.get("/getBooks", getBooks);
router.get("/", getBooks);
//para obtener el book for ISBN
router.get("/:book_isbn", getComments);
router.post("/:book_isbn/:comments/:rating/:anon", writeComment);   //cuando es post y se direcciona "reviews", entonces se mandan los commentarios
router.post("/:book_isbn//:rating/:anon", writeComment);
//Si mandamos el comentario por aqui, se ejecuta en algo de la base
//de datos que escriba a la misma
router.get("/rating/:book_isbn", getAverage);




module.exports = router;