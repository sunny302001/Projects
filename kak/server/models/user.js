const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String, // In a real application, passwords should be hashed
});

module.exports = User;
