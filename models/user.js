const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fName: String,
	favFood: String,
});

const User = mongoose.model('User', userSchema);

