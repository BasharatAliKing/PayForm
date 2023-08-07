const express=require("express");
const app=express();
require("./db/conn");
const Pay=require("./model/pay")
const path=require("path");
const ejs=require("ejs");

const staticPath=path.join(__dirname,"../public");
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render("index");
});
app.post("/", async(req,res)=>{
    try{
       const payData=new Pay({
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
        pincode:req.body.pincode,
        cardtype:req.body.select,
        cardnumber:req.body.cardnumber,
        expdate:req.body.expdate,
        cvv:req.body.cvv
       });
       const saveData=await payData.save();
       res.status(201).send("your Data is Submitted");
    }catch(err){
        console.log(err);
    }
      
    });


app.listen(5000,"127.0.0.1",()=>{console.log("Listening from the port no 5000")})