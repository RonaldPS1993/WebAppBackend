const pool = require("../../config/database");

let authorBooksdb = {};

//Gets the books done by a specific author using the authors ID
authorBooksdb.authorBooks = (authorId) => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT book_title FROM books WHERE author_id = ?',[authorId], (err,bookInfo)=>{
            if(err){
                return reject(err);
            }
            pool.query('SELECT author_first_name,author_last_name FROM authors WHERE author_id = ?',[authorId], (err,authorInfo)=>{
                if(err){
                    return reject(err);
                }
                return resolve({bookInfo,authorInfo}); 
            });          
    }); 
}
)}

module.exports = authorBooksdb;