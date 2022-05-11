const router = require('express').Router();
const verify = require('../../contollers/verifyToken');
const Movie = require('../../models/movies');


module.exports.getAll = async (req, res) => {

    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json({ message: movies });
        }
        catch (err) {
            res.status(400).json({ message: err });
        }

    }

}