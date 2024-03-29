//Import of all user.services
const { 
    create, 
    getUserByUserId, 
    getUsers, 
    updateUser, 
    deleteUser,
    getUserByUsername,
    createAddress
} = require("./user.service");

//methods used for encrypting passwords
const{ genSaltSync, hashSync, compareSync} = require('bcrypt');
const { sign } = require("jsonwebtoken");

//Defining all controllers
module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10); //hashing password
        body.passwords= hashSync(body.passwords, salt); //storing in body.passwords
        create(body, (err, results) => {
            if (err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Email Already Exists"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: "Successfuly Created Account"
            });
        });
    },
    getUserByUserId: (req, res) => {
        const customer_id = req.params.customer_id;
        //passing function as a callback from user.service
        getUserByUserId(customer_id, (err, results) => {
            //if there is an error
            if (err) {
                console.log(err);
                return;
            }
            //if result is null
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Record Not Found"
                });
            }
            //if we do have a result 
            return res.json({
                success: 1,
                data: results
            });
        }); 
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
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
    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.passwords = hashSync(body.passwords, salt);
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return false;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Failed to update user"
                });
            }
            return res.json({
                success: 1,
                message: "Updated Successfully"
            });
        });
    }, 
    deleteUser: (req, res) => {
        //data is customer_id from user.service
        const data = req.body;
        deleteUser(data, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0, 
                    message: "Record Not Found"
                });
            }
            return res.json({
                success: 1,
                message: "User Deleted Successfully"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUsername(body.customer_id, (err,results) => {
            if(err) {
                console.log(err);
            }
            if(!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
            const result = compareSync(body.passwords, results.passwords);
            if (result) {
                results.passwords = undefined;
                const jsontoken = sign({ result: results}, process.env.JWT_SECRET,{
                    expiresIn: "90d"
                });
                return res.json({
                success: 1,
                message: "login successful",
                token: jsontoken    
                });
            } else {
                return res.json({
                    success: 0, 
                    data: "Invalid email or password"
                });
            }
        });
    },

    createAddress:(req,res) => {
        const body = req.body;
        createAddress(body, (error,results)=> {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success : 0,
                    message : "Error creating address"
                });
            }
            return res.status(200).json({
                success : 1,
                data: results,
                message: "Successfuly Added Address"
            });
        });
    }
};