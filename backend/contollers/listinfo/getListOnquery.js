const List = require('../../models/list');


module.exports.getlistOnquery=async(req, res) => {

    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try {
        if (typeQuery) {
            if (genreQuery) {
               list=await List.aggregate([
                    {
                        $sample: { size: 10 }
                    },
                    {
                        $match:
                        {
                            type: typeQuery,
                            genre: genreQuery
                        }
                    }]
                );
            }else{
                list=await List.aggregate([
                    {
                        $sample: { size: 10 }
                    },
                    {
                        $match:
                        {
                            type: typeQuery
                        }
                    }]
                );

            }
        }
        else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(200).json(list);
    }
    
    catch (err) {
        res.status(400).json({ message: err });
    }

}