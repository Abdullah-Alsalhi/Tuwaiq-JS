const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/test";
const db = mongoose.connection;

mongoose.connect(mongoURI, {}, () => {
  console.log("connection is established");
});

db.on("Error", (err) => {
  console.log(err.message, "mongoose not working");
});

db.on("connected", () => {
  console.log("DATABASE CONNECTED");
});
