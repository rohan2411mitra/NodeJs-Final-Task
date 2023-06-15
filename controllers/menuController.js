const foodItems=require("../foodItems.js");
const jwt= require('jsonwebtoken');

const menu_all = (req,res) =>{
    res.render('Menu', { title: 'Menu', foodItems:foodItems});
}


const menu_search = (req,res) =>{
    let filteredFoods=[];
    const SearchQuery=req.body.search.trim();
    filteredFoods = foodItems.filter(item => {
        return item.name.toLowerCase().includes(SearchQuery.toLowerCase());
    });
    res.render('Menu', { title: 'Menu',foodItems:filteredFoods});
}


function AuthCheck(req, res, next) {

    const token = req.cookies.uid;
    // Check if user has a valid token
    if (token) {
        jwt.verify(token, "Secret Value", (err, decoded) => {
            if (err) {
            res.redirect('/');
            } else {
            req.user = decoded;
            next();
            }
    });
    } else {
        res.redirect('/');
    }
    
  }


module.exports={
    menu_all,
    menu_search,
    AuthCheck
}