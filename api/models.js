const mongoose = require('mongoose');

// Schemas
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token: String
})

const ProductSchema = new mongoose.Schema({
    title: String
})


// Models
const User = mongoose.model('User', UserSchema)
const Product = mongoose.model('Product', ProductSchema)

// export all models created
module.exports = {
    User,
    Product
}