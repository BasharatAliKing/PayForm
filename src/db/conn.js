const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/PayForm",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
   
}).then(()=>{console.log("Connection Successful!!!")})
  .catch((err)=>{console.log(err)});