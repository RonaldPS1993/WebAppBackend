const { 
    createCart,
    addBooksToCart
 } = require("./cart.service");

module.exports = {
    createCart: (req,res) => {
        const body = req.body;
        createCart(body, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Shopping Cart error"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });
    },
    addBooksToCart:(req,res) => {
        const body = req.body;
        addBooksToCart(body, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Shooping Cart adding Books error"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results
            });
        });

    }
}