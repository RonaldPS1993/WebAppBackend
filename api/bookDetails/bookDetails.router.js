
const { request } = require('express');
const express = require('express');
const router = express.Router();
const booksdb = require('./bookInfo');
const authorBooksdb = require('./authorBooks')





//Router for /bookdetails/BookInfo/:bookIsbn which responds with the book title, book description,genre id,publisher id, and total rating for a given book
router.get('/bookInfo/:bookIsbn', async (req,res, next)=>{
    try{
        let results = await booksdb.oneBook(req.params.bookIsbn);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
});

//Router for /bookdetails/authorBooks/:authorid which responds with the books done by a specific author based on the ID that is passed.
router.get('/authorBooks/:authorId', async (req,res, next)=>{
    try{
        let results = await authorBooksdb.authorBooks(req.params.authorId);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
});

//Router for /bookdetails/BookInfo which responds with the reviews for a given book
router.get('/reviewInfo/:bookIsbn', async (req,res, next)=>{
    try{
        let results = await reviewdb.reviews(req.params.bookIsbn);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
});

module.exports = router;
