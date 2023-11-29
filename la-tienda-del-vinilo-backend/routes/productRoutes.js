
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/products', productController.getAllProducts);

router.get('/searchProducts', productController.searchProducts);

// create product
router.post('/products', productController.createProduct);

//delete product
router.delete('/products', productController.deleteProduct);

//update product
router.put('/products', productController.updateProduct);

router.get('/products/:id', productController.searchProductById)

//router.get('/products', productController.searchProductByName)


module.exports = router;
