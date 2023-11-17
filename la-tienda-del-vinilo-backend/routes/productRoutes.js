
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/products', productController.getAllProducts);

// create product
router.post('/products',productController.createProduct);

//delete product
router.delete('/products',productController.deleteProduct);

//update product
router.put('/products',productController.updateProduct);

module.exports = router;
