//Imported controllers
const { 
    createUser, 
    getUserByUserId, 
    getUsers, 
    updateUser, 
    deleteUser,
    login,
    createAddress
} = require("./user.controller");
const router = require('express').Router();
const { checkToken } = require("../../auth/token_validation");

//Define all routers for user
router.post("/", createUser);
router.get("/", getUsers);
router.get("/:customer_id", checkToken, getUserByUserId);
router.patch("/", updateUser);
router.delete("/", deleteUser);
router.post("/login", login);
router.post("/account", createAddress);


module.exports = router;