const user= require("../model/user")
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");

const  SECRET_KEY="oRKib6yMxQRgQEpWnjnAHyiR-hFRC8IHswmun-oNmV8"

exports.postUser=async(req,res)=>{
    try{
        const {username,email,roll,password}=req.body
        const data = await user.findOne({email:email})
        if(data){
            return res.send("already Exist")
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await user.create({
            username: username,
            email: email,
            roll:roll,
            password: hashedPassword,
        });
        res.status(200).send({message:"User Added SuccessFully",users:result})
    }
    catch{
        res.status(500).send({message:"Server Error"})
    }
}

exports.loginUser=async(req,res)=>{
    const {email, password} = req.body;
        try{
            const signedin = await user.findOne({email:email})
            if(!signedin){
                return res.status (200).json({message:"User not found"})
            }
            const matchedPassword = await bcrypt.compare(password, signedin.password)
          if(!matchedPassword){
            return res.status (400).json({message:"invalid password"})
          }
            const token = jwt.sign(
                { email: signedin.email, id: signedin._id},
                SECRET_KEY
            );

            res.status(201).send({user:signedin, token: token})
            }catch{
             
            res.status (500).json({message: "Server Error"})

        } 
}

exports.getAllStu=async(req,res)=>{
    try{
        const roll=req.params.roll
        const result= await user.find({roll:roll})
        res.status(200).send(result)
    }catch{
        res.status(500).send("Server error")
    }
}
