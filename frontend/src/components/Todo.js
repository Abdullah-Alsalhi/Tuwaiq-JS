import React from "react";

export default function Todo(props) {
  const { _id, title, isCompleted } = props.task;
  return (
    <div className="Todo">
      <p>
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          onClick={() => { // note: you can ignore if else conditions by passing !isCompleted to pass opposite of status
            if (isCompleted === false) {
              props.editTodoStatus(_id, true);
            } else {
              props.editTodoStatus(_id, false);
            }
            console.log("From Todo.js", _id, isCompleted);
          }}
        ></input>
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
      {/* <h2 className="STATUS">{isCompleted === true ? "Done" : "Pending"}</h2> */}
      <button className="DELETE"
        onClick={() => {
          console.log("Todo.js", _id);
          props.deleteTodo(_id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
