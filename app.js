const express=require("express")
const mongoose=require("mongoose");
const router=require("./router")
const cors= require("cors")
const server= express();
server.use(express.json())
server.use(cors())
port=5000;
server.use("/",router)
mongoose.connect("mongodb+srv://karthick:karthick33@bulbul.57vu6qe.mongodb.net/",{useNewUrlParser:true})
.then(()=>console.log(`database connected`))
.catch(()=>console.log(`database not connected`))


server.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})


