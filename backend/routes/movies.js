const router = require('express').Router();
const { create } = require('../contollers/movieinfo/createMovie');
const { deleteMovie } = require('../contollers/movieinfo/deleteMovie');
const { getAll } = require('../contollers/movieinfo/getAllMovie');
const { getMovie } = require('../contollers/movieinfo/getMovie');
const { getRandom } = require('../contollers/movieinfo/getRandomMovie');
const { updateMovie } = require('../contollers/movieinfo/updateMovie');
const verify = require('../contollers/verifyToken');
const Movie = require('../models/movies');

// const User=require('../models/user');


//CREATE a movie (done by the admin)
router.post('/movies/create', verify, create);


//UPDATE a movie (done by the admin)
router.put('/movies/edit/:id', verify, updateMovie);



//DELETE a movie  (done by the admin)
router.delete('/movies/delete/:id', verify, deleteMovie);

//GET the movies

router.get('/movies/find/:id', verify, getMovie);

//GET RANDOM 
router.get('movies/random', verify, getRandom);

//GET ALL
router.get('/movies/all', verify, getAll);


module.exports = router