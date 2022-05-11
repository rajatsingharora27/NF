const mongoose=require('mongoose');
const validator = require('validator');

const listSchema =new mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },

    type:{
        type:String,
        trim:true,
    },

    genre:{type:String},
    content:{type:Array}

},{timestamps:true});


module.exports=mongoose.model('List',listSchema);

