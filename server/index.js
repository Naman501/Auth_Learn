const express =require("express")
const app=express()
const port=5000;
const mongoose=require("mongoose")
const router=require("./routes/user.routes")


app.get("/",(req,res)=>{
    res.status(200).send("<h2><center>New Project</center></h2>")
    console.log("Behenchod");
    
})

//middleware
 
app.use(express.json())
app.use("/api",router)

// connection to db

async function connectToMongoDB(url){
    mongoose.connect(url).then(()=>{
        console.log("Connected to MongoDB")
    }
    ).catch((error)=>{
        console.log("Error connecting to MongoDB")
    })
};

connectToMongoDB("mongodb+srv://naman:test_cluster@cluster0.nf8sx.mongodb.net/")

// lstening to port
app.listen(port,()=>{
    console.log("Server is running on port :",port)
})