import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Todo from "./components/Todo";
function App() {
  const [task, setTask] = useState([]);

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((response) => {
      setTask(response.data);
      // console.log(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {task.map((task, i) => (
        <Todo key={i} title={task.title} completed={task.completed} />
      ))}
      {/* <button onClick={getData}>Get Data</button> */}
    </div>
  );
}

export default App;
