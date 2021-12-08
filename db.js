const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/database'
const db = mongoose.connection;

mongoose.connect(
  mongoURI,
	{
		userNewUrlParser: true, useUnifiedTopology: true
	},
	()=>{
		console.log("The connection is established");
	}
);

// Extra Error/Success

db.on("error", (err)=>{
	console.log(err.message + "MongoDB not working");
});

db.on("error", (err)=>{
	console.log("MongoDB Connected");
});