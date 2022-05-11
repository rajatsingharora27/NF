const express = require('express');
const verify = require('../contollers/verifyToken');
const router = express.Router();
const CryptoJS = require("crypto-js");
const User = require('../models/user');
const { update } = require('../contollers/userinfo/update');
const { deleteRecord } = require('../contollers/userinfo/delete');
const { find } = require('../contollers/userinfo/find');
const { findAllReord } = require('../contollers/userinfo/findAll');
const { stats } = require('../contollers/userinfo/stats');





//UPDATE
router.put('/update/:id', verify, update);

//DELETE
router.delete('/delete/:id', verify,deleteRecord);

//GET USER
router.get('/find/:id', find);

//GET ALL USER
router.get('/find/', verify, findAllReord );


//GET USER STATS (fetching total user per month)
router.get('/stats',stats);

module.exports = router;



