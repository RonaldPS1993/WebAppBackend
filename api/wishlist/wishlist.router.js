//Imported controllers
const {
    createWishlist,
    addBooksToWish
 } = require("./wishlist.controller");
const router = require("express").Router();

router.post("/",createWishlist);
router.post("/addtowish",addBooksToWish);

module.exports = router;