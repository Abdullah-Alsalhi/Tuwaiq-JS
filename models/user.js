const mongoose = require('mongoose');

// Schema

const userSchema = new mongoose.Schema({
  fName: {type: String, required: true},
	favFood: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;