const mongoose = require('mongoose')

const bankSchema= new mongoose.Schema({
    bankname:{
        type:String,
        require:true
    },
    accountno:{
        type:String,
        require:true
    },
    accountantname:{
        type:String,
        require:true
    },
    IFSC:{
        type:String,
        require:true
    },
    MICR:{
        type:String,
        require:true
    },
    branchname:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("Bank",bankSchema)