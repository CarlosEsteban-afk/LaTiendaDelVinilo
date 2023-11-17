
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all products
router.get('/users', userController.getAllUsers);
router.post('/users/cart/:rut', userController.addToCart);


module.exports = router;
