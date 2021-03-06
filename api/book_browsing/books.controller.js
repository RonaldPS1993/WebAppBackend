const {
    getTopSellers, getBooksByGenre
} = require("./books.service");

// here we create the controller for the different requests
module.exports = {
    getTopSellers: (req, res) => {
        getTopSellers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        }) 
    },
    getBooksByGenre: (req, res) => {
        getBooksByGenre((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        }) 
    }
}

