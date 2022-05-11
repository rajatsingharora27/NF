const router = require('express').Router();
const verify = require('../../contollers/verifyToken');
const Movie = require('../../models/movies');

module.exports.getMovie = async (req, res) => {

    try {
        const getMovie = await Movie.findById(req.params.id);
        res.status(200).json({ message: getMovie });
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
}