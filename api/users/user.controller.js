const { create } = require("./user.service");

//methods used for encrypting passwords
const{ genSaltSync, hashSync} = require('bcrypt');

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10); //hashing password
        body.passwords= hashSync(body.passwords, salt); //storing in body.password 
        create(body, (err, results) => {
            if (err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
}