//Import of all reviews.services
const { 
     
    getBooks,
    writeComment,
    getComments,
    getAverage,

} = require("./reviews.service");

//methods used for encrypting passwords

const{ genSaltSync, hashSync, compareSync} = require('bcrypt');
const { sign } = require("jsonwebtoken");

//Defining all controllers
module.exports = {


getBooks: (req, res) => {
    getBooks((err, results) => {
        //if there is an error
        if(err) {
            console.log(err);
            return;
        }
        //if we have results send to user
        return res.json({
            success: 1,
            data: results
        });
    });
},




getComments: (req, res) => {
    const book_isbn = req.params.book_isbn;
    //passing function as a callback from reviews.service
    getComments(book_isbn, (err, results) => {
        //if there is an error
        if (err) {
            console.log(err);
            return ;
        }
        //if result is null
        if (!results) {
            return res.json({
                success: 0,
                message: "Record Not Found",
            });
        }
        //if we do have a result 
        return res.json({
            success: 1,
            data: results,
        });
    }); 
},



getAverage: (req, res) => {
    const book_isbn = req.params.book_isbn;
    getAverage(book_isbn, (err, results) => {
        //if there is an error
        if (err) {
            console.log(err);
            return ;
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "Record Not Found",
            });
        }
        //if we do have a result 
        return res.json({
            success: 1,
            data: results,
            
        });
    }); 
},





writeComment: (req, res) => {

  
    const salt = genSaltSync(10); //hashing password
    //console.log("Salt: " + salt);

    //body.passwords= hashSync(body.passwords, salt); //storing in body.passwords
    //console.log("Body passw: " + body.passwords);
    //writeComment(body, (err, results) => {
     writeComment(req.params, (err, results) => { 
        if (err){
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error"
            });
        }
        return res.status(200).json({
            
            success: 1,
            data: results,
           
        });
    });
},


}