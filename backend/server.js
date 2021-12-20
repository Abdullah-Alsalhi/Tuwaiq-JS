const express = require("express");
const db = require("./db");
const Todo = require("./models/Todo");
const app = express();
const port = 3000;

app.use(express.json()); // must to read post request

app.get("/", (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.post("/insert", (req, res) => {
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

app.listen(port, () => {
  console.log("SERVER IS LISTENING TO", port);
});
