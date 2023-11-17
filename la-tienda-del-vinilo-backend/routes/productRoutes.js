
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/products', productController.getAllProducts);

router.get('/products/:id', productController.searchProductById)

router.get('/products/name', productController.searchProductByName)



module.exports = router;
