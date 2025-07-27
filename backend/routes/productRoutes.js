const express=require('express')
const { createProductController, getAllProductsController, getSingleProductsController, getProductPhotoController, deleteProductController, updateProductController, filterProductController, searchProductController } = require('../controllers/productControllers')
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware')
const formitable=require('express-formidable')
const router=express.Router()

router.post("/create-product",requireSignIn,isAdmin,formitable(),createProductController)
router.get("/all-products",getAllProductsController)
router.get("/single-products/:slug",getSingleProductsController)
router.get("/products-photo/:pid",getProductPhotoController)
router.delete("/delete-product/:pid",deleteProductController)
router.put("/update-product/:pid",requireSignIn,isAdmin,formitable(),updateProductController)
router.post("/filter-products",filterProductController)
router.get("/search-products/:key",searchProductController)

module.exports=router