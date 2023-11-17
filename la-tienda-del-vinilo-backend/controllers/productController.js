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


exports.deleteProduct = async (req,res)=>{
    const productId = parseInt(req.body.id);
    try {
        const deletedProduct = await Product.findOneAndDelete({ id: productId });
        if (!deletedProduct) {
            return res.status(404).send('Producto no encontrado');
        }
        res.status(204).send('Producto eliminado');
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).send('Error al eliminar el producto');
    }
};

exports.updateProduct = async (req,res)=>{
    const productId = parseInt(req.body.id);
    try{
        const updatedProduct = await Product.findOneAndUpdate({id: productId},
            {
                name: req.body.name,
                stock: req.body.stock,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                rating: req.body.rating,
                imgUrl: req.body.imgUrl
            },{
                new: true
            });
        if (!updatedProduct) {
          res.status(404).send('Producto no encontrado');
        } 
        res.json(updatedProduct);
    }catch(error){
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error al actualizar el producto');
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

exports.searchProductByName = async (req, res) => {
    console.log("aca");
    const { name } = req.body;
    try {
        console.log(name);  
        console.log("aca");

        const product = await Product.find({ name: { $regex: name, $options: "i" } });
        console.log(product);
        if (!product) {
            return res.status(404).send('Producto no encontrado')
        }
        res.json(product)

    } catch (err) {
        console.log(err);
    }
};