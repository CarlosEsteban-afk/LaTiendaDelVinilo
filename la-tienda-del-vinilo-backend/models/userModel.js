
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username required.'],
  },
  email: {
    type: String,
    required: [true, 'Email required.'],
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: [true, 'Name required.'],
  },
  lastname: {
    type: String,
    required: [true, 'Lastname required.'],
  },
  password: {
    type: String,
    required: [true, 'Password required.'],
  },
  rut: {
    type: String,
    required: [true, 'Rut required.'],
    unique: true,
  },
  cartItems: { type: Object },
  wishlistItems: { type: Object },
  previousPurchases: { type: Object }
});

//agregar boolean de admin???? 

module.exports = mongoose.model('users', userSchema);

