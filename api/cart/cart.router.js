const {
    createCart,
    addBooksToCart
 } = require("./cart.controller");
const router = require("express").Router();

router.post("/",createCart);
router.post("/addtocart",addBooksToCart);

module.exports = router;