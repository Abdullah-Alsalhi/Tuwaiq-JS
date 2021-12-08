const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fName: {type: String, required: true},
	age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;