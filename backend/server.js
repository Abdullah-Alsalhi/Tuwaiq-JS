const express = require("express");
const cors = require("cors");
const db = require("./db");
const Todo = require("./models/Todo");
const User = require("./models/User");
const app = express();
const port = 3001;

app.use(express.json()); // must to read post request
app.use(cors()); // to prevent from cors policy

app.post("/user/register", (req, res) => {
  User.create(req.body, (err, dataInserted) => {
    if (err) {
      // return handleError(err);
      res.status(400).json("Email already taken");
      console.log("Email already taken");
    } else {
      res.status(201).json(dataInserted);
    }
  });
});

app.post("/user/login", (req, res) => {
  User.find({ email: req.body.email }, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      if (data.length === 1) {
        if (req.body.password === data[0].password) {
          res
            .status(200)
            .json({
              message: "Login Successfully",
              username: data[0].username,
            });
        } else {
          res.status(400).json({ message: "Wrong Password" });
        }
      } else {
        res.status(404).json({ message: "Email entered is not registered" });
      }
    }
  });
});

// this to represent data
app.get("/tasks", (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      res.status(200).json(data);
    }
  });
});

// this to add data
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

// this to delete data
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

// this to edit on data
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

//                    /?key=value&key=value
app.get("/tasks/filter", (req, res) => {
  Todo.find({ isCompleted: req.query.isCompleted }, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      res.status(200).json(data);
    }
  });
});

/*
// this returns tasks completed
app.get("/completedTasks", (req, res) => {
  Todo.find({isCompleted: true}, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      res.status(200).json(data);
    }
  });
});

// this returns tasks not completed
app.get("/notCompletedTasks", (req, res) => {
  Todo.find({isCompleted: false}, (err, data) => {
    if (err) {
      return handleError(err);
    } else {
      res.status(200).json(data);
    }
  });
});*/

app.delete("/tasks", (req, res) => {
  Todo.deleteMany({ isCompleted: true }, (err, deletedObj) => {
    if (err) {
      return handleError(err);
    } else {
      if (deletedObj.deletedCount === 0) {
        res.status(404).json("NO COMPLETED TASKS FOUND");
      } else {
        res.status(201).json("DELETED COMPLETED TASKS SUCCESSFULLY");
      }
    }
  });
});

app.delete("/alltasks", (req, res) => {
  Todo.deleteMany({}, (err, deletedObj) => {
    if (err) {
      return handleError(err);
    } else {
      if (deletedObj.deletedCount === 0) {
        res.status(404).json("NO TASKS FOUND");
      } else {
        res.status(201).json("DELETED TASKS SUCCESSFULLY");
      }
    }
  });
});

app.put("/tasks/:id/:isCompleted", (req, res) => {
  Todo.updateOne(
    { _id: req.params.id },
    { isCompleted: req.params.isCompleted },
    (err, updatedObj) => {
      if (err) {
        return handleError(err);
      } else {
        if (updatedObj.matchedCount === 0) {
          res.status(404).json("Not Found");
        } else {
          res.status(200).json("updated status successfully");
        }
      }
    }
  );
});

app.listen(port, () => {
  console.log("SERVER IS LISTENING TO", port);
});
