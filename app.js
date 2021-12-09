const express = require('express');
const db = require('./db');
const User = require('./models/user');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/insert', (req, res)=>{
  User.create(req.body, (err)=>{
    if (err){
      return handleError(err);
    }else{
      res.json("CREATED NEW USER SUCCESSFULLY");
    };
  });
});

app.get('/', (req, res)=>{
  User.find({}, (err, data)=>{
    if (err){
      return handleError(err);
    }else{
      res.json(data)
    };
  });
});



app.listen(port, ()=>{
  console.log("SERVER IS RUNNING NORMALLY ON", port);
});