const List = require('../../models/list');

module.exports.getAllList = async (req, res) => {


    try {
        const result = await List.find();
        res.status(200).json({ message: result });
    }
    catch (err) {
        res.status(400).json({ message: err });
    }


}