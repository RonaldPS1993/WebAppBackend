const { 
    createWish,
    addBooksToWish
 } = require("./wishlist.service");
const { decrypt } = require("../../auth/token_validation");

module.exports = {
    createWishlist: (req,res) => {
        const body = req.body;      
        const customer_id = decrypt(req).result.customer_id;
        
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

    }
}