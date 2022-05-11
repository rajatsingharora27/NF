const router = require('express').Router();
const verify = require('../../contollers/verifyToken');
const Movie = require('../../models/movies');


module.exports.deleteMovie =  async (req, res) => {

    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Movie has been deleted" });
        }
        catch (err) {
            res.status(400).json({ message: err });
        }

    }

}