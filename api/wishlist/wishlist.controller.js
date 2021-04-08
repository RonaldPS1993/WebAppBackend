const { 
    createWish,
    addBooksToWish,
    getWish,
    getWishNum,
    changeWish,
    deleteItem,
    getShopping,
    getCount
 } = require("./wishlist.service");
const { decrypt } = require("../../auth/token_validation");

module.exports = {
    createWishlist: (req,res) => {
        const body = req.body;      
        //const customer_id = decrypt(req).result.customer_id; //FIXME front end tokens 
        /*
        createWish(customer_id,body, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Wishlist error"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        }); */

        createWish(body, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Wishlist error"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });
    },
    addBooksToWish:(req,res) => {
        const body = req.body;
        addBooksToWish(body, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Wishlist adding error"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });
    },
    getWish:(req,res) => {
        //const body = req.body;
        //const customer_id = decrypt(req).result.customer_id;
        const cart_id = req.params.cart_id;

        getWish(cart_id, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Wishlist display error"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });
    },
    getWishNum:(req,res) => {
        //const body = req.body;
        //const customer_id = decrypt(req).result.customer_id;
        const customer_id = req.params.customer_id;
        
        getWishNum(customer_id, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Active wishlists display error"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });
    },
    changeWish:(req,res) => {
        const body = req.body;
        //const customer_id = decrypt(req).result.customer_id;
        
        changeWish(body, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Error in the change of items"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });
    },
    deleteItem:(req,res) => {
        const body = req.body;
        //const customer_id = decrypt(req).result.customer_id;
        
        deleteItem(body, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Error in the change of items"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });
    },
    getShopping:(req,res) => {
        const customer_id = req.params.customer_id;
        
        getShopping(customer_id, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Error in getting the shopping cart"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });
    },
    getCount:(req,res) => {
        const customer_id = req.params.customer_id;
        
        getCount(customer_id, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Error in getting the number of wishlists"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });
    }
}