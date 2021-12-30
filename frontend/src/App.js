import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Todo from "./components/Todo";
import Add from "./components/Add";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
function App() {
  const [tasks, setTask] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Abdullah");

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
    <div className="text-center">
      
      <Routes>
        <Route
          path="/home"
          element={
            <div className="Login d-flex p-2 border w-50 p-3  shadow-lg p-3 mb-5 bg-light rounded row g-3 align-items-center border border-primary">
              <nav className="navbar navbar-light Navbar">
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link
                      className="list-group-item-danger"
                      to="/logout"
                      onClick={(e) => {
                        setUsername("");
                        setIsLoggedIn(false);
                      }}
                    >
                      <i className="fas fa-sign-out-alt btn btn-danger" ></i>
                      
                    </Link>
                    
                  </li>
                  <h2 className='fas position-absolute top-0 end-0'><i>{username.toUpperCase()}</i></h2>
                </ul>
              </nav>
              <h3 className="fas text-center blockquote p-3 mb-2 bg-dark.bg-gradient text-dark shadow-sm p-3 mb-5 bg-body rounded mb-5 border border-primary">
                Todo App
              </h3>
              <h5 className="bg-light mt-0">
                Todo App Is To Manage Your Daily Duties
              </h5>
              <div>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                    <button
                      className="btn btn-outline-danger list-group-item"
                      onClick={() => {
                        deleteAll();
                      }}
                    >
                      <i class="fas fa-trash btn-danger"></i>


                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-outline-success "
                      onClick={() => {
                        getFiltered(true);
                      }}
                    >
                      <i class="far fa-check-circle"></i>
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => {
                        getFiltered(false);
                      }}
                    >
                      <i class="fas fa-clipboard-list"></i>
                    </button>
                  </li>
                </ul>
              </div>

              <Add creatTaskFunction={postNewTask} />

              {dataMap}
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
        <Route path="/logout" element={<Logout />} />
      </Routes>

      <br />
    </div>
  );
}

export default App;
