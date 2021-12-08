const express = require('express');
const db = require('./db');
const User = require('./models/user');
const app = express();
const port = 3001;

app.use(express.json());

console.log(User);
data = {fName: "Abdullah", favFood: "Pizza"}
app.post('/insert', (req, res)=>{
	User.create(data, (err, newData)=>{
		if (err){
			return handleError(err);
		}
		console.log("Data", newData)
	})
})



app.listen(port, ()=>{
  console.log("Server is running on", port);
});