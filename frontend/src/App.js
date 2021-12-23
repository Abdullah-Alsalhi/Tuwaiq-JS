import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Todo from "./components/Todo";
import Add from "./components/Add";
function App() {
  const [tasks, setTask] = useState([]);
  const getData = () => {
    axios.get(`http://localhost:3001/tasks`).then((response) => {
      setTask(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const postNewTask = (body) => {
    axios
      .post(`http://localhost:3001/tasks`, body)
      .then((response) => {
        // setTask(response.data);
        console.log(response.data);
        getData();
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  // {/* <button onClick={getData}>Get Tasks</button> */}
  const dataMap = tasks.map((task, i) => {
    return <Todo key={i} title={task.title} completed={task.isCompleted} /> 
  });
  return (
    <div className="App">
      <p>{dataMap}</p>
      <Add creatTaskFunction={postNewTask} />
    </div>
  );
}

export default App;
