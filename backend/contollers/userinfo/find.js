const User=require('../../models/user');


module.exports.find=async (req, res) => {
    try {
        const getUser = await User.findById(req.params.id);
        const {password,...info}=getUser._doc;
        res.status(200).json({user:info});
    }
    catch (err) {
        res.status(404).json({ message: 'Password entered is wrong' })
    }
};