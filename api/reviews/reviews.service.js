const pool = require("../../config/database");

//from DB getting customer_profile
module.exports = {
    getRatingbyISBN: (book_isbn, callBack) => {
        //Busca el rating de un libro segun el book_isbn
        //Por lo tanto el req debe incluir el book_isbn
        //Esto coger el book_isbn del url y lo mete en la variable
        pool.query(
            'SELECT total_rating from books WHERE book_isbn = ?',
            [book_isbn],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getComments: (book_isbn, callBack) => {

        //Busca el rating de un libro segun el book_isbn
        //Por lo tanto el req debe incluir el book_isbn
        //Esto coger el book_isbn del url y lo mete en la variable
        pool.query(
            'SELECT comments,rating,customer_id, show_nickname from rating WHERE book_isbn = ?',
            [book_isbn],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    
    getBooks: callBack => {
        pool.query(
            'SELECT book_title, book_edition, book_isbn, total_rating FROM books',
            [],
            (error, results, fields) => {
                if (error) {
                return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    writeComment: (data, callBack) => {

            pool.query(
                'insert into rating(rating_id, comments, rating,  book_isbn, show_nickname)  values ("",?,?,?,?)',
            [
                data.comments,
                data.rating,
                data.book_isbn,
                data.anon,
            
            ],
            (error, results, fields) => {
                if (error){
                return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    
    getAverage: (data, callBack) => {

        
        
        pool.query(
            'select avg(rating) from rating where book_isbn = ?',
            [data],
            
            (error, results, fields) => {
                if (error) {
                return callBack(error);
                }
                return callBack(null, results);
            }
        );

    }
    
    
};