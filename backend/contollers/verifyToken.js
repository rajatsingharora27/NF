const jwt=require('jsonwebtoken');



function verify(req,res,next){

    const authToken=req.headers.token;
    
    
    if(authToken){
        const token = authToken.split(" ")[1];

        //verify
        jwt.verify(token, process.env.SECRET_KEY, (err, user)=> {
            if(err){
                return  res.status(400).json({message:err})
            }
            else{
                req.user=user;
                

            }
          });
    }
    else{
        return  res.status(400).json({message:"you are not authenticated"})
    }
    next();
}

module.exports=verify