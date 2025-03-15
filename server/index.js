const express =require("express")
const app=express()
const port=5000;
const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")
const router=require("./routes/user.routes")
require("dotenv").config()
const cors = require("cors");
app.use(cors());


app.get("/",(req,res)=>{
    res.status(200).send("<h2><center>New Project</center></h2>")
    console.log("Behenchod");
    
})

//middleware
 
app.use(express.json())
app.use("/api",router)
app.use(cookieParser())



// connection to db

async function connectToMongoDB(url){
    mongoose.connect(url).then(()=>{
        console.log("Connected to MongoDB")
    }
    ).catch((error)=>{
        console.log("Error connecting to MongoDB")
    })
};

connectToMongoDB(process.env.MONGODB_URI)

// lstening to port
app.listen(port,()=>{
    console.log("Server is running on port :",port)
})