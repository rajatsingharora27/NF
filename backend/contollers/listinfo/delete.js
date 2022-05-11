const List = require('../../models/list');


module.exports.deleteList=async (req, res) => {

    if (req.user.isAdmin) {
        try {
            const result = await List.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: result });
        }
        catch (err) {
            res.status(400).json({ message: err });
        }

    }
}