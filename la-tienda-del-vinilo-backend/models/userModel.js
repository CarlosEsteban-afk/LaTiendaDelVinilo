
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    name: String,
    lastname: String,
    password: String,
    rut: String,
    cartItems: [],
    wishlistItems: []
});

module.exports = mongoose.model('users', userSchema);


/**
 * [
    {
        "username": "Usuario1",
        "email": "usuario1@example.com",
        "name": "hector",
        "lastname": "salamanca",
        "password": "usuario1",
        "rut": "16.257.999-1",
        "cartItems": [],
        "wishlistItems": []
    },
    {
        "username": "Usuario2",
        "email": "usuario2@example.com",
        "name": "pedro",
        "lastname": "salamanca",
        "password": "usuario1",
        "rut": "203670605",
        "cartItems": [],
        "wishlistItems": []
    }
]
 */