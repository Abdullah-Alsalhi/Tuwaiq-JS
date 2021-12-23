import React from "react";

export default function Todo(props) {
  const {_id, title, isCompleted, deleteTodo }= props.task
  return (
    <div className="Todo">
      <p>
        <input type="checkbox" checked={isCompleted}></input>
        <strong>
          <span
            className="taskStatus"
            style={{
              textDecoration: isCompleted ? "line-through" : "none",
            }}
          >
            {title}
          </span>
        </strong>
      </p>
      <h2>{isCompleted === true ? "Done" : "Pending"}</h2>
      <button
        onClick={() => {
          console.log('Todo.js',_id)
          props.deleteTodo(_id)
        }}
      >
        Delete
      </button>
    </div>
  );
}
