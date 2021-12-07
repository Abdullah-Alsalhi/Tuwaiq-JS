const express = require('express');
const app = express();
const port = 3000;

db = [
	{fName: "Madini", job:"Imam"},
	{fName: "Abdullah", job: "freelancer"},
	{fName: "Ali", job: "Writer"},
];

app.use(express.json());

app.get("/", (req,res)=>{
	res.json(db);
});

app.post("/", (req,res)=>{
	db.push(req.body);
	res.json("Element has been add to the db");
});

app.put("/:index", (req, res)=>{
	db[req.params.index].job = req.body.NewElement;
	res.json("Edit Job successfully");
});

app.delete("/", (req, res)=>{
	db.pop();
	res.json("Deleted last element successfully");
});






app.listen(port, ()=>{
	console.log("Server is working on", port);
});