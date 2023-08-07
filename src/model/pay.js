const mongoose=require("mongoose");
require("../db/conn");


// Schemaa 
const paySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    gender:String,
    address:String,
    email:String,
    pincode:String,
    cardtype:String,
    cardnumber:String,
    expdate:String,
    cvv:String
});

// model
const payModel=new mongoose.model("Pay",paySchema);

module.exports=payModel;