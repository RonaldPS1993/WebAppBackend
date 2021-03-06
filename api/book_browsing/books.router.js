const { getTopSellers, getBooksByGenre} = require("./books.controller");
const router = require("express").Router();

//send the GET request to the getTopSeller controller
router.get("/topsellers", getTopSellers);

//send the GET request to the getBooksByGenre controller
router.get("/genre", getBooksByGenre);

module.exports = router;

