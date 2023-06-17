const jwt= require('jsonwebtoken');
const Cart=require('../models/Cart');
const User = require("../models/User");

const profile_Display = (req, res) => {
    // Retrieve the JWT token from the cookie
    const token = req.cookies.uid;
  
    // Decode the JWT token to access user information
    const decodedToken = jwt.decode(token);
  
    // Extract the user information from the decoded token
    const first_name = decodedToken.first_name;
    const last_name = decodedToken.last_name;
    const email = decodedToken.email;

    // Render the profile page with the user information
    res.render('Profile', { title:"Profile",first_name, last_name, email });
  }

const cart_Display =(req,res) =>{
  const cart= Cart.getCart()
  let Products=[]
  let totPrice=0
  if (cart!== null){
    Products= Cart.getCart().products
    totPrice = Cart.getCart().totalPrice
  }
  res.render('Order',{title:"Cart", Products,totPrice});
}

const cart_Check =(req,res) =>{
  const cart= Cart.getCart()
  let check_id=req.body.Id
  let Products=Cart.getCart().products
  const ProductIndex = Products.findIndex(p => p.id == check_id);
  let product = Products[ProductIndex];
  console.log(product);
  let val=req.body.action;
  if (val=="Add"){
    Cart.save(product);
  }
  else if (val=="Remove"){
    Cart.delete(check_id);
  }
  Products=Cart.getCart().products
  let totPrice=Cart.getCart().totalPrice
  res.render('Order',{title:"Cart", Products, totPrice});
}

const cart_Confirm = (req,res) =>{
  const cart= Cart.getCart()
  if (cart== null){
    res.redirect("/User/Order")
  }
  let Products=Cart.getCart().products
  let totPrice=Cart.getCart().totalPrice
  res.render('Confirm',{title:"Confirm", Products, totPrice})
}

const cart_Confirmed=(req,res) =>{
  check_email=req.user.email;
  User.findOne({email:check_email})
  .then(user=>{
    let cart=Cart.getCart()
    const order={
      items : cart.products,
      totalPrice : cart.totalPrice,
      date : Date.now()
    }
    console.log(order);
    user.past_orders.push(order);
    user.save()
    .then(()=>{
      req.flash("success","Order Placed Successfully!");
      console.log("Order Placed Successfully!");
      res.redirect('/User/Profile');
    })
    .catch((err) =>{
      req.flash("err","Some Error Occured")
      console.log(err);
      res.redirect('/User/Profile')
    })
    
  })
}

  module.exports={
    profile_Display,
    cart_Display,
    cart_Check,
    cart_Confirm,
    cart_Confirmed
  }
