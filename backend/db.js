const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/todo";

const db = mongoose.connection;

mongoose.connect(mongoURI);

db.on("ERROR", (err) => {
  console.log("ERROR", err);
});

db.on("connected", (connect) => {
  console.log("MONGOD-CONNECTED");
});
