const { getTopSellers, getBooksByGenre, getBooksByRating, getBooksSortedByAuthor,
getBooksSortedByPrice, getBooksSortedByDate, getBooksSortedByRating, getBooksSortedByTitle
} = require("./books.controller");
const router = require("express").Router();

//send the GET request to the getTopSeller controller
router.get("/topsellers", getTopSellers);

//send the GET request to the getBooksByGenre controller
router.get("/:genre", getBooksByGenre);

router.get("/:rating", getBooksByRating);

router.get("/sortbyauthor", getBooksSortedByAuthor);

router.get("/sortbyprice", getBooksSortedByPrice);

router.get("/sortbydate", getBooksSortedByDate);

router.get("/sortbytitle", getBooksSortedByTitle);

router.get("/sortbyrating", getBooksSortedByRating);

module.exports = router;

