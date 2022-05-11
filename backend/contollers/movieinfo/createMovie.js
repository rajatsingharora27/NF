const router = require('express').Router();
// const verify = require('../../contollers/verifyToken');
const Movie = require('../../models/movies');

module.exports.create= async (req, res) => {

    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const addMovie = await newMovie.save();
            res.status(200).json({ message: addMovie });
        }
        catch (err) {
            res.status(400).json({ message: err });
        }

    }

}