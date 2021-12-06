const express = require('express');
const app = express();
const port = 3000;

db = [
	{
		fName: "Abdullah",
		favFood: "Salad"
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


app.listen(port, ()=>{
	console.log("app is running on", port)
});