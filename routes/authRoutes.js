const express=require("express");
const AuthController=require("../controllers/authController")

const router=express.Router();

router.get('/',AuthController.display);
router.post('/',AuthController.register);

module.exports=router;