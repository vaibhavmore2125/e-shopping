const { response } = require('express')
const { hashPassword, comparePassword } = require('../helper/authHelper')
const authModel=require('../models/authModel')
const jwt=require('jsonwebtoken')
const registerController=async (req,res)=>{
    try
    {
        let {name,email,password,phone,address,answer}=req.body
        if(!name)
        {
            res.status(400).send({Error:"Name is required"})
        }
        if(!email)
        {
            res.status(400).send({Error:"Email is required"})
        }
        if(!password)
        {
            res.status(400).send({Error:"Password is required"})
        }
        if(!phone)
        {
            res.status(400).send({Error:"Phone number is required"})
        }
        if(!address)
        {
            res.status(400).send({Error:"Address is required"})
        }
        if(!answer)
        {
            res.status(400).send({Error:"Answer is required"})
        }
        let existinguser=await authModel.findOne({email})
        if(existinguser)
        {
            res.status(200).send({
                success:true,
                message:"User already exists"
            })
        }
        let hashedPassword=await hashPassword(password)
        const user=await authModel({name,email,password:hashedPassword,phone,address,answer}).save()
        res.status(201).send({
            success:true,
            message:"New user created successfully",
            user
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error while creating new user"
        })
    }
}

const loginController=async (req,res)=>{
    try
    {
        const {email,password}=req.body
        if(!email || !password)
        {
            return res.send({Error:"Invalid email or Password"})
        }
        const user=await authModel.findOne({email})
        if(!user)
        {
            res.status(404).send({
                success:false,
                message:"Email is not registerred"
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match)
        {
            res.status(404).send({
                success:false,
                message:"Invalid Password"
            })
        }
        let token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})
        res.status(201).send({
            success:true,
            message:"User logged in successfully",
            user:{
                name:user.name,
                email:user.email,
                password:user.password,
                phone:user.phone,
                address:user.address,
                answer:user.answer,
                role:user.role
            },
            token
        })
    }catch(error)
    {
        // console.log(error)
        res.status(500).send({
            success:false,
            message:"Error while login user"
        })
        
        
    }
}

const getAllUsersController=async (req,res)=>{
    try
    {
        let users=await authModel.find({})
        res.status(200).send({
            success:true,
            message:"Got all users",
            users
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error while getting all users"
        })
    }
}

const forgotPasswordController=async(req,res)=>{
    try
    {
        let {email,answer,newPassword}=req.body
        if(!email)
        {
            res.status(400).send({Error:"Email is required"})
        }
        if(!answer)
        {
            res.status(400).send({Error:"Answer is requirde"})
        }
        if(!newPassword)
        {
            res.status(400).send({Error:"Password is required"})
        }
        const user=await authModel.findOne({email,answer})
        if(!user)
        {
            res.status(404).send({
                success:false,
                message:"Wrong email or answer"
            })
        }
        const hashed=await hashPassword(newPassword)
        await authModel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success:true,
            message:"Password changed successfully"
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error while changing the password"
        })
    }
}

const testController=(req,res)=>{
    res.send("Test Controller")
}

module.exports={registerController,loginController,getAllUsersController,testController,forgotPasswordController}