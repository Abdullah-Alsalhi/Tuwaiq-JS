const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/data';
const db = mongoose.connection;

// connect the database

mongoose.connect(
	mongoURI, 
{/* options can be written here */},
	()=>{
		console.log("Connection established");
	}
);

