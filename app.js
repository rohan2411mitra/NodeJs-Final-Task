const express = require('express');
const morgan = require('morgan');
const foodItems = require('./foodItems.js');

// express app
const app = express();

//Listen to requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const foodItems=require("./foodItems.js");
  res.render('HomePage', { title: 'Home',foodItems});
});

app.get('/SignUp', (req, res) => {
  res.render('SignUp', { title: 'Sign Up'});
});

app.post('/SignUp', (req, res) => {
  res.redirect('/Menu');
});

app.get('/Login', (req, res) => {
  res.render('Login', { title: 'Login'});
});

app.post('/Login', (req, res) => {
  res.redirect('/Menu');
});

app.get('/Menu', (req, res) => {
  const foodItems=require("./foodItems.js");
  res.render('Menu', { title: 'Menu',foodItems:foodItems});
});

app.post('/Menu',(req,res)=>{
  const foodItems=require("./foodItems.js");
  let filteredFoods=[];
  const SearchQuery=req.body.search;
  filteredFoods = foodItems.filter(item => {
    return item.name.toLowerCase().includes(SearchQuery.toLowerCase());
  });
  res.render('Menu', { title: 'Menu',foodItems:filteredFoods});
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
