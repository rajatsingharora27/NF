const router = require('express').Router();
const verify = require('../../contollers/verifyToken');
const Movie = require('../../models/movies');


module.exports.updateMovie = async (req, res) => {

    if (req.user.isAdmin) {


        try {
            const updateMovie = await Movie.findByIdAndUpdate(req.params.id, { "$set": req.body }, { new: true });
            res.status(200).json({ message: updateMovie });
        }
        catch (err) {
            res.status(400).json({ message: err });
        }

    }

}