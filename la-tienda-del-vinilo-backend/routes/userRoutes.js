
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Get all users
router.get('/users', userController.getAllUsers);

router.post('/users/cart/:rut', userController.addToCart);
router.post('/users/wishlist/:rut', userController.addToWishlist);
router.delete('/users/wishlist/:rut', userController.removeFromWishlist);
// router.get('/users/wishlist/:rut', userController.getUserWishlist)

// Get all products


//create user
router.post('/users',userController.createUser);

//Login
router.post('/users/login',userController.loginUser);

//update
router.put('/users',userController.updateUser);


module.exports = router;
