const List = require('../../models/list');

module.exports.create =async (req, res) => {

    if (req.user.isAdmin) {
        const list = new List(req.body);

        try {
            const addList = await list.save();
            res.status(200).json({ message: addList });
        }
        catch (err) {
            res.status(400).json({ message: err });
        }

    }
}
