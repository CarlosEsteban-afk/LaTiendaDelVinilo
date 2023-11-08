const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    email: String,
    name: String,
    lastname: String,
});

module.exports = mongoose.model('users', userSchema);