const mongoose = require('mongoose')

const documentSchema = mongoose.Schema({
    student_id_proof:{
        type:String,
        required:true
    },
    adhar_card:{
        type:String,
        required:true
    },
    pan_card:{
        type:String,
        required:true
    },
    community_certificate:{
        type:String,
        required:true
    },
    sslc_marksheet:{
        type:String,
        required:true
    },
    hsc_marksheet:{
        type:String,
        required:true
    },
    ug_marksheet:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("documents",documentSchema )