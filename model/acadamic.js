const mongoose = require('mongoose')

const AcdemicSchema =  new mongoose.Schema({
    institutionname:{
        type:String,
        required:true
    },
    institutionmainId:{
        type:String,
        required:true
    },
    Student_register_number:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    sslc_percentage:{
        type:Number,
        required:true
    },
    hsc_percentage:{
        type:Number,
        required:true
    },
    ug_cgpa:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model("ACDAMIC", AcdemicSchema)
