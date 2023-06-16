const express=require("express");
const UserController=require("../controllers/userController")
const MenuController=require("../controllers/menuController")

const router=express.Router();

router.get('/Profile',MenuController.AuthCheck,UserController.profile_Display);

module.exports=router;