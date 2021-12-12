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

app.put("/edit/:oldName", (req, res) => {
  User.updateOne(
    { fName: req.params.oldName },
    { fName: req.body.newName },
    (err, updatedObj) => {
      if (err) {
        return handleError(err);
      } else {
        if (updatedObj.matchedCount === 0) {
          res.status(404).json("Not found");
        } else {
          res.status(200).json("SUCCESSFULLY EDITED");
        }
      }
    }
  );
});

app.delete("/delete/:fName", (req, res) => {
  User.deleteOne({ fName: req.params.fName }, (err, deletedObj) => {
    if (err) {
      return handleError(err);
    } else {
      if (deletedObj.deletedCount === 0) {
        console.log(deletedObj);
        res.status(404).json(req.params.fName + " Not found");
      } else {
        res.status(200).json(req.params.fName + " deleted successfully");
      }
    }
  });
});

app.listen(port, () => {
  console.log("SERVER LISTENING ON", port);
});
