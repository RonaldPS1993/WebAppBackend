//Imported controllers
const {
    createWishlist,
    addBooksToWish
 } = require("./wishlist.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/createwish",checkToken,createWishlist);
router.post("/addtowish",addBooksToWish);

module.exports = router;