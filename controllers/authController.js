const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const display = (req,res)=>{
    res.render('SignUp', { title: 'Sign Up'});
}

const register = (req,res) =>{
    bcrypt.hash(req.body.password, 10, function(err,hashedPass){
        if (err){
            console.log(err);
        }

        let user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hashedPass
        })
    
        user.save()
        .then(()=>{
            console.log("User Added Successfully!");
            res.redirect("/Menu");
        })
        .catch((err) =>{
            console.log(err);
        })

    })
}

module.exports={
    register,
    display
}