const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.log(err);
    }
};
exports.createProduct = async (req, res) => {
    const { id, name, stock, price, description, category, rating, imgUrl } = req.body;
    const newProduct = new Product({ id, name, stock, price, description, category, rating, imgUrl });
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};
