const mongoose=require("mongoose");
const schema= mongoose.Schema

const userSchema= new schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }

},{timestamps:true})

const User=mongoose.model('User', userSchema)
module.exports = User
