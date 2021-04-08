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
    getBooksByGenre: (genre, callBack) => {
        pool.query(
            'select * from webapp.books, webapp.genre where webapp.books.genre_id = webapp.genre.genre_id and webapp.genre.genre_name = ?;',
            [genre],
            (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
            }
        );
    },
    getBooksByRating: (rating, callBack) => {
        pool.query(
            'select * from webapp.books where webapp.books.total_rating >= ?;',
            [rating],
            (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
            }
        );
    },
    getBooksSortedByAuthor: callBack => {
        pool.query(
            'select * from webapp.books, webapp.authors where webapp.books.author_id = webapp.authors.author_id orderby webapp.authors.author_first_name',
            [],
            (error, results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getBooksSortedByPrice: callBack => {
        pool.query(
            'select * from webapp.books order by webapp.books.book_price;',
            [],
            (error,results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getBooksSortedByRating: callBack => {
        pool.query(
            'select * from webapp.books order by webapp.books.total_rating;',
            [],
            (error,results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getBooksSortedByTitle: callBack => {
        pool.query(
            'select * from webapp.books order by webapp.books.book_title;',
            [],
            (error,results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getBooksSortedByDate: callBack => {
        pool.query(
            'select * from webapp.books order by webapp.books.book_release_date;',
            [],
            (error,results, fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};

