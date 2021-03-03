const pool = require("../../config/database");

let reviewdb = {};

//Gets the an author's information according to the publisher id input
reviewdb.reviews = (bookIsbn) => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT rating,comments from rating WHERE book_isbn = ?',[bookIsbn], (err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = reviewdb;