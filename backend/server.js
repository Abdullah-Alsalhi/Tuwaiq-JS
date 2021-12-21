const express = require("express");
const db = require("./db");
const Todo = require("./models/Todo");
const app = express();
const port = 3000;

app.use(express.json()); // must to read post request

app.get("/tasks", (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.post("/tasks", (req, res) => {
  Todo.create(
    { title: req.body.title, isCompleted: req.body.isCompleted },
    (err, dataInserted) => {
      if (err) {
        return handleError(err);
      } else {
        res.status(201).json(dataInserted);
      }
    }
  );
});

app.delete("/tasks/:id", (req, res) => {
  Todo.deleteOne({ _id: req.params.id }, (err, deletedObj) => {
    if (err) {
      return handleError(err);
    } else {
      if (deletedObj.deletedCount === 0) {
        res.status(404).json("NOT FOUND");
      } else {
        res.status(201).json("DELETED SUCCESSFULLY");
      }
    }
  });
});

app.put("/tasks/:id", (req, res) => {
  Todo.updateOne(
    { _id: req.params.id },
    { title: req.body.newTitle },
    (err, updatedObj) => {
      if (err) {
        return handleError(err);
      } else {
        if (updatedObj.matchedCount === 0) {
          res.status(404).json("Not Found");
        } else {
          res.status(200).json("updated successfully");
        }
      }
    }
  );
});

app.listen(port, () => {
  console.log("SERVER IS LISTENING TO", port);
});
