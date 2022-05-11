const User=require('../../models/user');


module.exports.deleteRecord=async (req, res) => {

    if (req.params.id === req.body.id || req.user.isAdmin) {

        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            const {password,...info}=deleteUser._doc;
            res.status(200).json({ deleted: info })

        }
        catch (err) {
            res.status(404).json({ message: 'you can only delete your account' })
        }

    }
    else {
        //cant delete the info
        res.status(404).json({ message: 'Permission not granted to change the cradentials' })
    }

};