const express=require("express")
const mongoose=require("mongoose");
const router=require("./router")
const cors= require("cors")
const server= express();
server.use(express.json())

// server.use(express.static(__dirname+'/public'));
server.use(cors())
require('dotenv').config()
const port=process.env.PORT;
server.use("/",router)
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log(`database connected`))
.catch(()=>console.log(`database not connected`))


server.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})


