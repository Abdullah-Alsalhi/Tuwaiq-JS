const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model("userSchema", userSchema);

module.exports = User;
