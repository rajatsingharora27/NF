const router = require('express').Router();
const { create } = require('../contollers/listinfo/create');
const { deleteList } = require('../contollers/listinfo/delete');
const { getAllList } = require('../contollers/listinfo/getAl');
const { getlistOnquery } = require('../contollers/listinfo/getListOnquery');
const verify = require('../contollers/verifyToken');
const List = require('../models/list');

//CREATE LIST
router.post('/list', verify, create);


//DELETE LIST

router.delete('/list/delete/:id', verify,deleteList);


//GET ALL THE LIST

router.get('/list/get', verify,getAllList );

//getListOnquery
router.get('/list', verify, getlistOnquery);








module.exports = router
