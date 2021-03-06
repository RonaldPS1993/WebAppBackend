const pool = require("../../config/database");

//create the module that will execute the query for the different requests
module.exports = {
    getTopSellers: callBack => {
        pool.query(
            'SELECT * FROM webapp.books, webapp.publisher where publisher_name = "Pearson" and webapp.publisher.publisher_id = webapp.books.publisher_id',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getBooksByGenre: callBack => {
        pool.query('SELECT * FROM webapp.books order by webapp.books.genre_id;',
        [],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    }
}

