
const { request } = require('express');
const express = require('express');
const router = express.Router();
const authordb = require('./authorInfo');
const bookdb = require('./bookInfo');

//Router for /bookdetails/authorInfo which responds with all of the authors info if an id is not specified 
router.get('/authorInfo', async (req,res, next)=>{
    try{
        let results = await authordb.allAuthors();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
});

//Router for /bookdetails/:bookIsbn which responds with the author info that corressponds to the books isbn
router.get('/authorInfo/:bookIsbn', async (req,res, next)=>{
    try{
        let results = await authordb.oneAuthor(req.params.bookIsbn);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
});

//Router for /bookdetails/BookInfo which responds with the book title, book description,genre id,publisher id, and total rating for all books
router.get('/bookInfo', async (req,res, next)=>{
    try{
        let results = await bookdb.allBooks();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
});

//Router for /bookdetails/BookInfo/:bookIsbn which responds with the book title, book description,genre id,publisher id, and total rating for a given book
router.get('/bookInfo/:bookIsbn', async (req,res, next)=>{
    try{
        let results = await bookdb.oneBook(req.params.bookIsbn);
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
