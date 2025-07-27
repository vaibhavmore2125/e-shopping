const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,   // ✅ spelling: `required` पाहा
      unique: true,
    },
    slug: {
      type: String,
      required: true,   // ✅ spelling: `required`
    },
    price: {
      type: Number,
      required: true,   // ✅ spelling: `required`
    },
    quantity: {
      type: Number,
      required: true,   // ✅ spelling: `required`
    },
    description: {
      type: String,
      required: true,   // ✅ spelling: `required`
    },
    category: {         // ✅ key नाव small letter - `category`
      type: mongoose.ObjectId,
      ref: 'category',
      required: true,   // ✅ spelling: `required`
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);

// const mongoose=require('mongoose')
// const { default: Categoryform } = require('../../frontend/src/assets/Categoryform')
// const productShema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         unique:true
//     },
//      slug:{
//         type:String,
//         required:true,
//     },
//      price:{
//         type:Number,
//         required:true,
//     },
//      quantity:{
//         type:Number,
//         required:true,
//     },
//      description:{
//         type:String,
//         required:true,
//     },
//      Category:{
//         type:mongoose.ObjectId,
//         ref:'category',
//         required:true,
//     },
//     photo:{
//         data:Buffer,
//         contentType:String,
//     }
// },{timestamps:true})
// module.exports=mongoose.model("products",productShema)