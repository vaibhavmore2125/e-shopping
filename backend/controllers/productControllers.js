const productModel=require("../models/productModel")
const slugify=require('slugify')
const fs=require('fs')
const createProductController=async (req,res)=>{


    try{
        const {name,description,price,category,quantity}=req.fields
        const {photo}=req.files
        if(!name)
        {
            res.status(404).send({Error:"Name is required"})
        }
         if(!description)
        {
            res.status(404).send({Error:"Description is required"})
        }
         if(!price)
        {
            res.status(404).send({Error:"price is required"})
        }
         if(!category)
        {
            res.status(404).send({Error:"Category is required"})
        }
         if(!quantity)
        {
            res.status(404).send({Error:"Quantity is required"})
        }
         if(!photo)
        {
            res.status(404).send({Error:"Photo is required"})
        }
       const product=new productModel({...req.fields,slug:slugify(name)})
       if(photo)
       {
        product.photo.data=fs.readFileSync(photo.path)
        product.photo.contentType=photo.type
       }
       await product.save()
       res.status(200).send({
        success:true,
        message:"New Product Created Successfully",
        product
       })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in Creating new Product"
        })
    }
}
const getAllProductsController=async (req,res)=>{
    try{
        let products=await productModel.find({}).select("-photo").sort({createAt:-1}).populate//.limit(10)
        ("category")
        res.status(200).send({
            success:true,
            Total:products.length,
            message:"Got All Producats",
            products
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in getting all products",
            error
        })
    }
}

const getSingleProductsController=async (req,res)=>{
    try{
        let products=await productModel.findOne({slug:req.params.slug}).select("-photo").populate("category")
        res.status(200).send({
            success:true,
            Total:products.length,
            message:"Got Single Producat",
            products
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in getting Single product",
            error
        })
    }
}

const getProductPhotoController=async (req,res)=>{
    try{
        const product=await productModel.findById(req.params.pid).select("photo")
        if(product.photo.data)
        {
            res.set("Content-type",product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in getting product photo",
            error
        })
    }
}

const deleteProductController=async (req,res)=>{
    try{
        let product=await productModel.findByIdAndDelete(req.params.pid).select("-photo")
        res.status(200).send({
            success:true,
            message:"Product deleted Successfully",
            product
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in deleting product",
            error
        })
    }
}

const updateProductController=async (req,res)=>{


    try{
        const {name,description,price,category,quantity}=req.fields
        const {photo}=req.files
        if(!name)
        {
            res.status(404).send({Error:"Name is required"})
        }
         if(!description)
        {
            res.status(404).send({Error:"Description is required"})
        }
         if(!price)
        {
            res.status(404).send({Error:"price is required"})
        }
         if(!category)
        {
            res.status(404).send({Error:"Category is required"})
        }
         if(!quantity)
        {
            res.status(404).send({Error:"Quantity is required"})
        }
         if(!photo)
        {
            res.status(404).send({Error:"Photo is required"})
        }
       const product=await productModel.findByIdAndUpdate({...req.fields,slug:slugify(name)},
        {new:true})
       if(photo)
       {
        product.photo.data=fs.readFileSync(photo.path)
        product.photo.contentType=photo.type
       }
       await product.save()
       res.status(200).send({
        success:true,
        message:"New Product update Successfully",
        product
       })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in update new Product"
        })
    }
}

const filterProductController=async (req,res)=>{
    try{
        const {checked}=req.body
        let args={}
        if(checked.length>0) args.category= { $in:checked};
        const products=await productModel.find(args)
        res.status(200).send({
            success:true,
            products
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in filtering Product",
            error
        })
    }
}

const searchProductController=async (req,res)=>{
    try{
        const result=await productModel.find({
            $or:[
                {name:{$regex:req.params.key}},
                {description:{$regex:req.params.key}}
            ]
        }).select("-photo")
        res.json(result)
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in Searching Product",
            error
        })
    }
}
module.exports={createProductController,getAllProductsController,getSingleProductsController,getProductPhotoController,deleteProductController,updateProductController,filterProductController,searchProductController}