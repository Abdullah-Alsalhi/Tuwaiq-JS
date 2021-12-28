import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Todo from "./components/Todo";
import Add from "./components/Add";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [tasks, setTask] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const deleteAll = () => {
    axios
      .delete(`http://localhost:3001/alltasks`)
      .then((response) => {
        // setTask(response.data);
        console.log(response.data);
        getData();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const editTodoStatus = (id, Status) => {
    axios
      .put(`http://localhost:3001/tasks/${id}/${Status}`)
      .then((response) => {
        // setTask(response.data);
        // console.log(response.data);
        getData();
      })
      .catch((err) => {
        console.log("Error", err);
      });
    // console.log("editTodoStatus App.js");
  };

  const deleteTodo = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3001/tasks/${id}`)
      .then((response) => {
        // setTask(response.data);
        console.log(response.data);
        getData();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const getData = () => {
    axios.get(`http://localhost:3001/tasks`).then((response) => {
      setTask(response.data);
      // console.log(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const getFiltered = (STATUS) => {
    axios
      .get(`http://localhost:3001/tasks/filter?isCompleted=${STATUS}`)
      .then((response) => {
        setTask(response.data);
        // console.log(response.data);
      });
  };

  const dataMap = tasks.map((taskObj, i) => {
    return (
      <Todo
        key={taskObj._id}
        task={taskObj}
        deleteTodo={deleteTodo}
        editTodoStatus={editTodoStatus}
      />
    );
  });

  const postNewTask = (body) => {
    axios
      .post(`http://localhost:3001/tasks`, body)
      .then((response) => {
        // setTask(response.data);
        // console.log(response.data);
        getData();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  /* <button onClick={getData}>Get Tasks</button> */

  return (
    <div className="App">
      <nav>
        <Link to="/home">Home</Link> {" | "}
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/register">Register</Link> {" | "}
        <Link
          to="/login"
          onClick={(e) => {
            e.preventDefault();
            setUsername("");
          }}
        >
          Logout
        </Link>
      </nav>
      {username}
      <Routes>
        <Route
          path="/home"
          element={
            <div>
              {dataMap}
              <Add creatTaskFunction={postNewTask} />
              <button
                className="Delete-All"
                onClick={() => {
                  deleteAll();
                }}
              >
                Delete All
              </button>
              <button
                className="Get-finished"
                onClick={() => {
                  getFiltered(true);
                }}
              >
                GetFinishedTasks
              </button>
              <button
                className="Get-Pending"
                onClick={() => {
                  getFiltered(false);
                }}
              >
                GetPendingTasks
              </button>
            </div>
          }
        />
        <Route
          path="login"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
          }
        />
        <Route path="register" element={<Register />} />
      </Routes>

      <br />
    </div>
  );
}

export default App;
