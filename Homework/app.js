const express = require('express');
const db = require('./db');
const User = require('./models/user');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/newuser', (req, res)=>{
	res.json("Created new user Successfully");
});

app.get('/all', (req, res)=>{
	User.find({}, (err, Data)=>{
		if (err){
			return handleError(err);
		}else{
			console.log("Data", Data);
		}
	})
})





app.listen(port, ()=>{
  console.log("Server is working on", port);
});