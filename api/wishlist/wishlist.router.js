//Imported controllers
const {
    createWishlist,
    addBooksToWish
 } = require("./wishlist.controller");
const router = require("express").Router();

router.post("/createwish/:customer_id",createWishlist);
router.post("/addtowish",addBooksToWish);

module.exports = router;