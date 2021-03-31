const pool = require("../../config/database");

let booksdb = {};


//Gets the a books details based on the ISBN 
booksdb.oneBook = (bookIsbn) => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT book_title, book_description,genre_id,bio,total_rating FROM books WHERE book_isbn = ?',[bookIsbn], (err,bookInfo)=>{
            if(err){
                return reject(err);
            }
            pool.query('SELECT author_first_name, author_last_name, author_id FROM authors WHERE author_id = (select author_id FROM books where book_isbn = ?)',[bookIsbn], (err,authorInfo)=>{
                if(err){
                    return reject(err);
                }
                pool.query('SELECT genre_name FROM genre WHERE genre_id = (SELECT genre_id FROM books WHERE book_isbn =?)',[bookIsbn], (err,genreInfo)=>{
                    if(err){
                        return reject(err);
                    }
                    pool.query('SELECT * FROM publisher WHERE publisher_id = (SELECT publisher_id FROM books WHERE book_isbn =?)',[bookIsbn], (err,publishingInfo)=>{
                        if(err){
                            return reject(err);
                        }
                        return resolve({bookInfo,authorInfo,genreInfo,publishingInfo});
                    })
                })
            })
        })
    })
}    


module.exports = booksdb;
 