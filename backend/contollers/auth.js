// const express = require('express');
const User = require('../models/user')
// const router = express.Router();
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");




//Register the user


// USING ASYNC/AWAIT
// router.post('/register',async (req,res)=>{
//     const newUser=new User({
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password,

//     });

//     try{
//         const user=await newUser.save();
//         res.status(201).json(user);
//     }
//     catch(err){
//         res.status(400).json(err);
//     }
// })



module.exports.signup =(req, res) => {

    //checking if the user already exist

    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                res.status(400).json({ message: error });
            }
            if (user) {
                //user already exist
                res.status(200).json({ message: 'user already exist' });

            } else {
                //new user
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    isAdmin:req.body.isAdmin,
                    password: CryptoJS.AES.encrypt(JSON.stringify(req.body.password), process.env.SECRET_KEY).toString(),

                });

                newUser.save((err, user) => {
                    if (err) {
                        res.status(404).json(err);
                    }
                    else {
                        res.status(201).json(user);
                    }
                });

            }
        })
}

module.exports.signin=async (req, res) => {
    //enter the email 
    // enter the password 

    try {
        //checking if email exist
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            //if passwod or email is incorrect then give error message
            res.status(404).json({ message: 'Email or Password are Incorrect' })
        }
        if (user) {
            //if yes the check the password 
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const decryptedPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

            // we shoud not send the password to the user 
            //so hold the password for security reason

            const accessToken = jwt.sign({id:user._id,  isAdmin: user.isAdmin}, process.env.SECRET_KEY, { expiresIn: '5d' });




            if (decryptedPassword !== req.body.password) {
                res.status(404).json({ message: 'Password are Incorrect' })
            }
            else {
                const { _id, username, email, profilePic, isAdmin, createdAt, updatedAt } = user;
                // console.log(info);
                res.status(201).json({
                    accessToken,
                    user: {
                        _id,
                        username,
                        email,
                        profilePic,
                        isAdmin,
                        createdAt,
                        updatedAt

                    }
                })
            }
        }
    }


    catch (err) {
        res.status(404).json(err);
    }


}