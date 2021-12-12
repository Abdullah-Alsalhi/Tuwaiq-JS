const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  fName: String,
  favFood: String,
  age: Number,
});

const User = model("User", userSchema);

module.exports = User;
