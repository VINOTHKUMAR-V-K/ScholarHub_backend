const acadamic = require('../model/acadamic')
const acdamic = require('../model/acadamic')

exports.postAcdamic= async(req,res)=>{
    try{
        const {institutionname, institutionmainId, Student_register_number,degree,course, sslc_percentage, hsc_percentage, ug_cgpa } = req.body
        const data = await acdamic.findOne({institutionname:institutionname})
        if(data){
            return res.send('already exist')
        }
        const result = await acdamic.create({
            institutionname: institutionname,
            institutionmainId: institutionmainId,
            Student_register_number:Student_register_number,
            degree:degree,
            course:course,
            sslc_percentage:sslc_percentage,
            hsc_percentage:hsc_percentage,
            ug_cgpa:ug_cgpa
        })
        res.status(200).send({message:"User Added Successfully",result:result})
    }   
    catch{
        res.status(500).send({message:"Server Error"})
    }
}   

exports.getAllAcadamic=async(req,res)=>{
    try{
         let result= await acadamic.find()
         res.status(200).send(result)
    }catch{
        res.status(500).send("Server error")
    }
}