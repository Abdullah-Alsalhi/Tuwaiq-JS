const multi = require('./multi');

console.log(multi(3,3));

// ---

const express = require('express');
const app = express();

app.get("/test", (req, res)=>{
	res.send("Get request and this is the response")
});

app.listen(3000, ()=>{
	console.log("Server is working")
});