const mongoose=require('mongoose');
const validator = require('validator');


const userSchema =new mongoose.Schema({

    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
    },

    email:{
        type:String,
        unique:true,
        validate:{
            validator:function(email){
                return validator.isEmail(email);
            },
            message:'Not a valid Email',
        },
    required: [true, 'Email is required'],
    },

    password:{
        type:String,
        required:true
    },

    profilePic:{
        type:String,
        default:"",
    },
    
    isAdmin:{
        type:Boolean,
        default:false,
    },

    



},{timestamps:true});


module.exports=mongoose.model('User',userSchema);

