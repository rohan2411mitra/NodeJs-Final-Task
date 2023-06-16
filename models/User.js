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
    },
    cart: {
        items: [{
            productId: {
                type: mongoose.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }],
        totalPrice: Number
    }

},{timestamps:true})

userSchema.methods.addToCart = async function(productId) {
    const product = await Product.findById(productId);
    if (product) {
        const cart = this.cart;
        const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(product._id).trim());
        if (isExisting >= 0) {
            cart.items[isExisting].qty += 1;
        } else {
            cart.items.push({ productId: product._id, qty: 1 });
        }
        if (!cart.totalPrice) {
            cart.totalPrice = 0;
        }
        cart.totalPrice += product.price;
        return this.save();
    }

};


userSchema.methods.removeFromCart = function(productId) {
    const cart = this.cart;
    const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(productId).trim());
    if (isExisting >= 0) {
        cart.items.splice(isExisting, 1);
        return this.save();
    }
}


const User=mongoose.model('User', userSchema)
module.exports = User
