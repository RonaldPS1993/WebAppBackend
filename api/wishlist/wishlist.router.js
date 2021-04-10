//Imported controllers
const {
    createWishlist,
    addBooksToWish,
    getWish,
    getWishNum,
    changeWish,
    deleteItem,
    getShopping,
    getCount
 } = require("./wishlist.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");


//router.post("/createwish",checkToken,createWishlist); //FIXME the front end need to proccess the token

router.post("/createwish",createWishlist);
router.post("/addtowish",addBooksToWish);
router.get("/getwish/:cart_id",getWish);
//router.get("/getwish",getWish);
router.get("/getwishnum/:customer_id",getWishNum);
router.get("/getshopping/:customer_id",getShopping);
router.get("/getcount/:customer_id",getCount);
//router.get("/getwishnum",getWishNum);
router.patch("/changewish",changeWish);
router.delete("/deleteitem",deleteItem);

//Final routes with token check, the other versions are tests
//router.post("/addtowish",checkToken,addBooksToWish);
//router.get("/getwish",checkToken,getwish);

module.exports = router;