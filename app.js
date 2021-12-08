const express = require('express');
const db = require('./db');
const app = express();
const port = 3001;

app.use(express.json());







app.listen(port, ()=>{
  console.log("Server is running on", port);
});