
const Basic = require("../model/basic")

exports.postbasic=async(req,res)=>{
    try{
        const {firstname,lastname,email,dob,address,address2,city,state,zip}=req.body
        const detail= await Basic.create({
            firstname:firstname,
            lastname:lastname,
            email:email,
            dob:dob,
            address:address,
            address2:address2,
            city:city,
            state:state,
            zip:zip
        })
        res.status(200).send(detail)

    }catch{
      res.status(500).send("Server error")
    }
}
exports.getAllStuent=async(req,res)=>{
    try{
        const result= await Basic.find()
        res.status(200).send(result)
    }catch{
        res.status(500).send("Server error")
    }
}

exports.getStubyId=async(req,res)=>{
    try{
        const result= await Basic.findById(req.params._id)
        res.status(200).send(result)
    }catch{
        res.status(500).send("Server error")
    }
}

exports.getStates=async(req,res)=>{
    try{
        var data= await Basic.find({state:req.params.state})
        res.status(200).send(data)

    }catch{
        res.status(500).send("Server error")
    }
}