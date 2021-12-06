const express = require('express');
const app = express();
const port = 3000;
app.get('/test7', (req, res)=>{
  res.send("Response from GET")
});

app.listen(port, ()=>{
	console.log("server is working on ${port}")
});