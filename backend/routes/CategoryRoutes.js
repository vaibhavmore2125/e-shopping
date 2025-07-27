const express=require('express')
const { createCategoryController, getAllCategoriesController, getSingleCategoriesController, getSingleCategoryController, UpdateCategoryController, deleteCategoryController } = require('../controllers/categoryController')
const { isAdmin, requireSignIn } = require('../middlewares/authMiddleware')
const router=express.Router()

router.post("/create-category",requireSignIn,isAdmin,createCategoryController)
router.get("/all-categories",getAllCategoriesController)
router.get("/single-category/:slug",getSingleCategoryController)
router.put("/update-category/:id",requireSignIn,isAdmin,UpdateCategoryController)
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)
module.exports=router