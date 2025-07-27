const express= require('express');
const {registerController, loginController, getAllUsersController, testController, forgotPasswordController}= require('../controllers/authControllers');
const { isAdmin, requireSignIn } = require('../middlewares/authMiddleware');
const router=express.Router();

router.post("/register",registerController)
router.post("/login",loginController)
router.get("/all-users",getAllUsersController)
router.post("/forgotPassword",forgotPasswordController)
router.get("/test",requireSignIn,isAdmin,testController)
router.get("/userauth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
router.get("/adminauth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})
module.exports=router
