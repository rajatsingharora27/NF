const User=require('../../models/user');
const CryptoJS = require("crypto-js");



module.exports.update=async (req, res) => {

    if (req.params.id === req.body.id || req.user.isAdmin) {
        //if user has requested to change the password then it will enter this if block
        if (req.body.password) {
            req.body.password = CryptoJS
                .AES
                .encrypt(JSON.stringify(req.body.password), process.env.SECRET_KEY)
                .toString()
        }
        //it will update whatever is on the body of the page
        //req.body
        try {

            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json({ updated: updatedUser })

        }
        catch (err) {
            res.status(404).json({ message: 'Password entered is wrong' })
        }

    }
    else {
        //cant change the info
        res.status(404).json({ message: 'Permission not granted to change the cradentials' })
    }

};

