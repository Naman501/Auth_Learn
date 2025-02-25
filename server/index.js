const express =require("express")
const app=express()
const port=5000;
const mongoose=require("mongoose")


app.get("/",(req,res)=>{
    res.status(200).send("<h2><center>New Project</center></h2>")
})


// connection to db

mongoose.connect( "mongodb://127.0.0.1:27017/auth-learn")
.then(()=>{
    
    console.log("Connected to database");
    
})


// lstening to port
app.listen(port,()=>{
    console.log("Server is running on port :",port)
})