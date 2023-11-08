const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Get all products
router.get('/users', userController.getAllUsers);

//create user
router.post('/users',userController.createUser);

//Login
router.post('/users/login',userController.loginUser);

module.exports = router;