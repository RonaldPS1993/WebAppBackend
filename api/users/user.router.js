const { createUser } = require("./user.controller");
const router = require('express').Router();

//pass request to create users
router.post('/',createUser);


module.exports = router;