const User=require('../../models/user');


module.exports.findAllReord=async (req, res) => {

    if (req.user.isAdmin) {
        //newUser    is name of the valriable we can give any name we like
        //when we send url as localhost:8000/api/find?newUser=true
        //this will make first condition true in ternary operation
        //and execute it
        const query=req.query.newUser;
        try {
            const user = query ?  await User.find().limit(3) : await User.find();
            const {password,...info}=user;
            // console.log(user)
            res.status(200).json(info)

        }
        catch (err) {
            res.status(404).json({ message: 'you are not allowed to see all users' })
        }

    }
    else {
        //cant delete the info
        res.status(404).json({ message: 'Permission not granted to change the cradentials' })
    }

}