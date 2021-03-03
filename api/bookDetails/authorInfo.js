const pool = require("../../config/database");

let authordb = {};

//Gets all of the author's first and last names from the database
authordb.allAuthors = () =>{
    return new Promise((resolve, reject)=>{
        
        pool.query('SELECT author_first_name, author_last_name FROM authors', (err,results)=>{
            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });
};

//Gets the an author's information according to the publisher id input
authordb.oneAuthor = (bookIsbn) => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT author_first_name, author_last_name FROM authors WHERE author_id = (select author_id FROM books where book_isbn = ?)',[bookIsbn], (err,results)=>{
            if(err){
                return reject(err);
            }

            return resolve(results[0]);
        });
    });
};

module.exports = authordb;