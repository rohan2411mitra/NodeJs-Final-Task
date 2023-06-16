const express=require("express");
const UserController=require("../controllers/userController")
const MenuController=require("../controllers/menuController")

const router=express.Router();

router.get('/Profile',MenuController.AuthCheck,UserController.profile_Display);
router.get('/Order',MenuController.AuthCheck,UserController.cart_Display);
router.post('/Order',MenuController.AuthCheck,UserController.cart_Check);

module.exports=router;