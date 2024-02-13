const bank=require("../model/bankdetail");

exports.postBank=async(req,res)=>{
    try{
        const {bankname,accountno,accountantname,IFSC,MICR,branchname}=req.body
        var details= await bank.create({
            bankname:bankname,
            accountno:accountno,
            accountantname:accountantname,
            IFSC:IFSC,
            MICR:MICR,
            branchname:branchname
        })
        res.status(200).send(details)

    }catch{
       res.status(500).send("server error")
    }
}
exports.getAllbank=async(req,res)=>{
    try{
        const data= await bank.find()
        res.status(200).send(data)

    }catch{
        res.status(500).send(" not fetched")
    }
}