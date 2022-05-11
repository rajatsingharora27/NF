const express = require('express');
const User = require('../models/user')
const router = express.Router();
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");




//Connecting to the Controller
const { signup, signin } = require('../contollers/auth');


//-------------------Validation Middleware is yet to be added------>Note



//New User Signup

router.post('/auth/signup',signup);



//SIGN IN FOR THE EXISTING USERS

router.post('/auth/signin', signin)



//user
// {
//     "username":"anamika",
//     "email":"anamika@gmail.com",
//     "password":"123345"
// }






module.exports = router;



