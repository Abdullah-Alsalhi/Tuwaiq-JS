const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/data";
const db = mongoose.connection;

mongoose.connect(mongoURI, {}, () => {
  console.log("CONNECTION ESTABLISHED");
});

db.on("Error", (err) => {
  console.log(err.message + "MONGOOSE ISSUE");
});

db.on("connected", (connect) => {
  console.log("SERVER CONNECTED");
});
