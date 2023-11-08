const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    stock: Number,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    imgUrl: String
});

module.exports = mongoose.model('products', productSchema);