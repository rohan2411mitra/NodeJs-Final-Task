const foodItems=require("../foodItems.js");

const menu_all = (req,res) =>{
    res.render('Menu', { title: 'Menu',foodItems:foodItems});
}


const menu_search = (req,res) =>{
    let filteredFoods=[];
    const SearchQuery=req.body.search.trim();
    filteredFoods = foodItems.filter(item => {
        return item.name.toLowerCase().includes(SearchQuery.toLowerCase());
    });
    res.render('Menu', { title: 'Menu',foodItems:filteredFoods});
}

module.exports={
    menu_all,
    menu_search
}