const User=require('../../models/user');


module.exports.stats=async (req,res)=>{

    const today= new Date();
    const lastYear= today.setFullYear(today.getFullYear()-1);

    const monthArray= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    try{

     const data= await User.aggregate([

            {
                $project:{
                    month:{"$month":"$createdAt"}
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{"$sum":1}
                }
            }
        ]);
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).json(err);
    }
}