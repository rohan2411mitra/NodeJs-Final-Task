const express = require('express');
const morgan = require('morgan');
const foodItems = require('./foodItems.js');
const mongoose = require('mongoose');
const MenuRoutes=require("./routes/menuRoutes.js")
const AuthRoutes=require("./routes/authRoutes.js")

// express app
const app = express();

const dbURI = "mongodb+srv://rohan:6hu8KmcTqgfMSIvg@restaurantdb.q8fzdh8.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => console.log("Connected to Database"))
.catch(err => console.log(err));

//Listen to requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));

//Homepage
app.get('/', (req, res) => {
  const foodItems=require("./foodItems.js");
  res.render('HomePage', { title: 'Home',foodItems});
});

//Login and SignUp pages
// app.get('/SignUp', (req, res) => {
//   res.render('SignUp', { title: 'Sign Up'});
// });

// app.post('/SignUp', (req, res) => {
//   res.redirect('/Menu');
// });

app.get('/Login', (req, res) => {
  res.render('Login', { title: 'Login'});
});

app.post('/Login', (req, res) => {
  res.redirect('/Menu');
});

//Menu Routes
app.use('/menu',MenuRoutes);
app.use('/SignUp',AuthRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
