const pool = require("../../config/database");

let booksdb = {};

//Gets all of the book details (book title, book description,genre id,publisher id,total rating) from the database
booksdb.allBooks = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT book_title, book_description,genre_id,publisher_id,total_rating FROM books', (err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//Gets the an author's information according to the publisher id input
booksdb.oneBook = (bookIsbn) => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT book_title, book_description,genre_id,publisher_id,total_rating FROM books WHERE book_isbn = ?',[bookIsbn], (err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = booksdb;