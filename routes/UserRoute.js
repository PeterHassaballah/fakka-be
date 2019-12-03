var express = require('express');
var router = express.Router();
var User = require('../Models/UserModel');
var userController = require('../Controllers/UserController');

//these functions are implemented

// router.post("/regUser",userController.addUser);
// router.get("/getUser",userController.getData);

//these functions are not 
// router.post("/login", userController.checkUserExist);
// router.post("/updateUser",userController.updateProfile);
// router.get("/getUrl",userController.uploadImage);

module.exports = router;
