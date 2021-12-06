const express = require('express');
const app = express();
const port = 3000;

db = [
	{
		fName: "Abdullah",
		favFood: "Salad"
	},
	{
		fName: "Rama",
		favFood: "Coffee"
	},
];

app.use(express.json()) // to be able to read what inside req.body


app.post('/ex', (req,res)=>{
	db.push(req.body);
	res.json("Success add new elem");
});

app.get('/ex', (req,res)=>{
	res.json(db);
});

// Exercise 2

app.put('/ex/:index', (req,res)=>{
	db[req.params.index].favFood = req.body.setFood;
	res.json("Edit favFood successfully");
});

app.delete('/ex', (req, res)=>{
	db.pop();
	res.json("Delete request done successfully");
});



app.listen(port, ()=>{
	console.log("app is running on", port);
});