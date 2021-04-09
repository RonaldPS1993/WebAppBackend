const {
    getTopSellers, getBooksByGenre, getBooksByRating, getBooksSortedByAuthor,
    getBooksSortedByPrice, getBooksSortedByDate, getBooksSortedByRating, getBooksSortedByTitle
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
        const genre = req.params.genre;
        getBooksByGenre(genre, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Record not found"
                })
            }
            return res.json({
                success: 1,
                data: results
            });
        }) 
    },
    getBooksByRating: (req, res) => {
        const rating = req.params.rating;
        getBooksByRating(rating, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Record not found"
                })
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getBooksSortedByAuthor: (req, res) => {
        getBooksSortedByAuthor((err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },
    getBooksSortedByPrice: (req, res) => {
        getBooksSortedByPrice((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },
    getBooksSortedByRating: (req, res) => {
        getBooksSortedByRating((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },
    getBooksSortedByTitle: (req, res) => {
        getBooksSortedByTitle((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },
    getBooksSortedByDate: (req, res) => {
        getBooksSortedByDate((err, results) => {
            if(err){
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

