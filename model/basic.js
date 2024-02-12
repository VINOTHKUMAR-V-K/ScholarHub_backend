const mongoose=require("mongoose");
 const Basic= new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    address2:{
        type:String,
       
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    zip:{
        type:String,
        require:true
    }
 })
 module.exports= mongoose.model("basicinfo",Basic)