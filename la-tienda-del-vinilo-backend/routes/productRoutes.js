
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/products', productController.getAllProducts);

router.get('/searchProducts', productController.searchProducts);

// create product
router.post('/products', productController.createProduct);

//delete product


//router.get('/products', productController.searchProductByName)


module.exports = router;
