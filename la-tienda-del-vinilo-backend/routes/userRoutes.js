const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/users', userController.getAllUsers);

router.post('/users/cart/:rut', userController.addToCart);
router.post('/users/wishlist/:rut', userController.addToWishlist);
router.delete('/users/wishlist/:rut', userController.removeFromWishlist);
// router.get('/users/wishlist/:rut', userController.getUserWishlist)
module.exports = router;