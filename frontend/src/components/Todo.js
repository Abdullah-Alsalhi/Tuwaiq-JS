import React from "react";

export default function Todo(props) {
  // const {title, isCompleted}= props.Task
  return (
    <div className="Todo">
      <h1>
        <input type='checkbox' checked={props.completed}></input>
        <strong><span className="taskStatus" style={{textDecoration: props.completed? "line-through": "none"}}>{props.title}</span></strong>
      </h1>
      <h2>{props.completed === true? "Done": "Pending"}</h2>
      
    </div>
  );
}
