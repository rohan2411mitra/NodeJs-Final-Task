const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Signdisplay = (req,res)=>{
    res.render('SignUp', {title: 'Sign Up'});
}

const Logindisplay = (req,res)=>{
    res.render('Login', {title: 'Log In'});
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

const login = (req,res) =>{
    let email = req.body.email
    let password = req.body.password

    User.findOne({email:email})
    .then(user =>{
        if (user){
            bcrypt.compare(password,user.password, function(err,result){
                if (err){
                    console.log(err);
                }
                if (result){
                    let token = jwt.sign({first_name : user.first_name,last_name:user.last_name,email:user.email},"Secret Value")
                    console.log("Login Successful");
                    res.cookie("uid",token);
                    res.redirect("/Menu");
                }else{
                    console.log("Password does not match!")
                }
            })
        }else{
            console.log("No User Found")
        }
    })
}


module.exports={
    register,
    Signdisplay,
    Logindisplay,
    login
}