const express = require("express");
const app = express();
const db = require("./db");
const User = require("./models/user");
const port = 3000;

app.use(express.json());
app.post("/", (req, res) => {
  newData = req.body;
  // fName = newData.username;
  // favFood = newData.userFavFood;
  // age = newData.userAge;
  User.create(newData, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      res.status(200).json("CREATED NEW USER SUCCESSFULLY");
    }
  });
});

app.get("/data", (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(port, () => {
  console.log("SERVER LISTENING ON", port);
});
