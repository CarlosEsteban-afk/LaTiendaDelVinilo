
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  name: String,
  lastname: String,
  password: String,
  rut: String,
  cartItems: [],
  wishlistItems: []
});

module.exports = mongoose.model('users', userSchema);    
