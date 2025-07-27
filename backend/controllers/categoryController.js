const categoryModel = require("../models/categoryModel")
const slugify=require('slugify')
const createCategoryController=async (req,res)=>{
    try{
        const {name}=req.body
        if(!name)
        {
            res.status(401).send({
                Error:"Name is required"
            })
        }
        let existingCategory=await categoryModel.findOne({name})
        if(existingCategory)
        {
            res.status(200).send({
                success:true,
                message:"Category already exists"

            })
        }
        let category=await new categoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:"Category Created successfully",
            category
        })
        }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error while creating category",
            error
        })
    }
}

const getAllCategoriesController=async (req,res)=>{
    try{
        let categories=await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:"Gol All Categories",
            categories
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Got all categories",
            error
        })
    }
}
const getSingleCategoryController=async (req,res)=>{
    try{
        let categories=await categoryModel.findOne(req.params)
        res.status(200).send({
            success:true,
            message:"Gol Single Category",
            category
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in getting single category",
            error
        })
    }
}
const UpdateCategoryController=async (req,res)=>{
    try{
        const {name}=req.body
        const{id}=req.params
        const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category update successfully",
            category
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in Updating category",
            error
        })
    }
}

const deleteCategoryController=async (req,res)=>{
    try{
        const {id}=req.body
        const category=await categoryModel.findByIdAndUpdate(id)
        res.status(200).send({
            success:true,
            message:"Category deleted successfully",
            category
        })
    }catch(error)
    {
        res.status(500).send({
            success:false,
            message:"Error in deleting category",
            error
        })
    }
}

module.exports={createCategoryController,getAllCategoriesController,getSingleCategoryController,UpdateCategoryController,deleteCategoryController}