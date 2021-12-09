const express = require('express');
const db = require('./db');
const User = require('./models/user');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/newuser', (req, res)=>{
	User.create({fName: "Abdullah", favFood: "Pizza"}, (err)=>{
		if (err){
			return handleError(err);
		}else{
		res.json("Created new user Successfully");
	}
	})
});

app.get('/all', (req, res)=>{
	User.find({}, (err, Data)=>{
		if (err){
			return handleError(err);
		}else{
			console.log("Data", Data);
			res.json(Data)
		}
	})
})

app.delete('/deleteuser', (req, res)=>{
	User.remove({fName: "Abdullah"}, (err)=>{
		if (err){
			return handleError(err);
		}else {
			res.json("Successfully deleted")
		}
	})
})

app.put('/edit', (req, res)=>{
	User.updateMany({fName: "Abdullah"}, {"$set":{fName: "Madini"}}, (err)=>{
		if (err){
			return handleError(err);
		}else{
			res.json("Name has been edited");
		}
	})
})


app.listen(port, ()=>{
  console.log("Server is working on", port);
});