const express = require("express");
const db = require("./db");
const User = require("./models/user");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/insert", (req, res) => {
  User.create(req.body, (err) => {
    if (err) {
      return handleError(err);
    } else {
      res.json("CREATED NEW USER SUCCESSFULLY");
    }
  });
});

app.get("/", (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      res.json(data);
    }
  });
});

app.delete("/users/:user", (req, res) => {
  User.deleteOne({ favFood: req.params.user }, (err, deletedObj) => {
    if (err) {
      return handleError(err);
    } else {
      if (deletedObj.deletedCount === 0) {
        res.status(404).json(req.params.user + " not found");
      } else {
        res.status(200).json("Deleted last user successfully");
      }
    }
  });
});

app.put("/edit/:oldFood", (req, res) => {
  User.updateOne(
    { favFood: req.params.oldFood },
    { favFood: req.body.newFavFood },
    (err, updatedObj) => {
      if (err) {
        return handleError(err);
      } else {
        if (updatedObj.matchedCount === 0) {
          res.status(404).json(req.params.oldFood + "not found");
        } else {
          res.status(200).json(req.body.newFavFood + " Update successfully");
        }
      }
    }
  );
});

app.listen(port, () => {
  console.log("SERVER IS RUNNING NORMALLY ON", port);
});
