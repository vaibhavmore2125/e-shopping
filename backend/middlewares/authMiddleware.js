const jwt=require('jsonwebtoken')
const authModel=require('../models/authModel')

const requireSignIn=(req,res,next)=>{
    try
    {
        const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
        next()

    }catch(error)
    {
        console.log(error)
    }
}

const isAdmin=async(req,res,next)=>{
    try
    {
        const user=await authModel.findById(req.user._id)
        if(user.role!==1)
        {
            res.status(401).send({
                success:false,
                message:"Not An Authorized user."
            })
        }
        else
        {
            next()
        }
    }catch(error)
    {
        console.log(error)
    }
}
module.exports={requireSignIn,isAdmin}