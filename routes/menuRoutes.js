const express=require("express");
const MenuController=require("../controllers/menuController")

const router=express.Router();

router.get('/',MenuController.menu_all);
router.post('/',MenuController.menu_search);

module.exports=router;