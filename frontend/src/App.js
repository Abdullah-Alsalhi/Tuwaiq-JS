import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Todo from "./components/Todo";

function App() {
  const [task, setTask] = useState([]);
  const getData = () => {
    axios.get(`http://localhost:3001/tasks`).then((response) => {
      setTask(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <button onClick={getData}>Get Tasks</button>
      {task.map((task, i) => (
        <Todo key={i} title={task.title} completed={task.isCompleted} />
      ))}
    </div>
  );
}

export default App;
