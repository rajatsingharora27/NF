const mongoose=require('mongoose');
const validator = require('validator');


const movieSchema =new mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },

    desc:{
        type:String,
        required:true,
        trim:true,
    },

    img:{type:String},
    imgTitle:{type:String},
    imgSm:{type:String},
    year:{type:String},
    trailer:{type:String},
    video:{type:String},
    limit:{type:Number},
    genre:{type:String},
    isSeries:{type:Boolean,default:false},
    duration:{type:String},

},{timestamps:true});


module.exports=mongoose.model('Movie',movieSchema);

