const router = require('express').Router();
const verify = require('../../contollers/verifyToken');
const Movie = require('../../models/movies');

module.exports.getRandom=  async (req, res) => {


    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                {
                    "$match": { isSeries: true }
                },
                {
                    "$sample": { size: 1 }
                }
            ])
        }
        else {
            movie = await Movie.aggregate([
                {
                    "$match": { isSeries: false }
                },
                {
                    "$sample": { size: 1 }
                }
            ])
        }
        res.status(200).json({ message: movie });

    }
    catch (err) {
        res.status(400).json({ message: err });
    }
}