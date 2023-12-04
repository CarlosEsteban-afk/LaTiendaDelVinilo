const Product = require('../models/productModel');


exports.getAllProducts = async (req, res) => {

    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.log(err);
    }
};
//este metodo es usado por el adm
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
exports.searchProductById = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id);

        const product = await Product.find({ id });
        console.log(product);
        if (!product) {
            return res.status(404).send('Producto no encontrado')
        }
        res.json(product)
    } catch (err) {
        console.log(err);
    }
};
exports.searchProducts = async (req, res) => {
    const name = req.query.name;
    let query = {};
    if (name) {
        query = { name: { $regex: name, $options: "i" } };
    }

    try {
        const product = await Product.findOne(query);
        if (!product) {
            return res.status(404).send('Producto no encontrado')
        }
        res.json(product)
    } catch (err) {
        console.log(err);
    }
};
