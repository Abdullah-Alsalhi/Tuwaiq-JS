const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/database'
const db = mongoose.connection;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
	console.log("connection is established");
});
