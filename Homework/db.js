const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/data';
const db = mongoose.connection;

mongoose.connect(mongoURI, {}, ()=>{
  console.log("Connection established");
});

db.on('error', (err)=>{
	console.log(err.message + "Mongoose not working");
});

db.on('connected', ()=>{
	console.log("DataBase connected");
});