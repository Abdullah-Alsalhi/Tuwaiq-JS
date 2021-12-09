const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  fName: String,
  favFood: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

module.exports= User;