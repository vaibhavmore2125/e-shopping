const mongoose=require('mongoose')
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        lowercase:true
    }
},{timeseries:true})

module.exports=mongoose.model("category",categorySchema)