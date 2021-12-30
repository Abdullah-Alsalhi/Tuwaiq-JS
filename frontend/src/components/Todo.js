import React from "react";

export default function Todo(props) {
  const { _id, title, isCompleted } = props.task;
  return (
    <div className="Todo">
      <p>
        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked={isCompleted}
          onClick={() => {
            // note: you can ignore if else conditions by passing !isCompleted to pass opposite of status
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
            className="fas email col-form-label"
            style={{
              textDecoration: isCompleted ? "line-through" : "none",
            }}
          >
            {title}
          </span>
        </strong>
      </p>
      <button
        className="btn btn-outline-warning"
        onClick={() => {
          console.log("Todo.js", _id);
          props.deleteTodo(_id);
        }}
      >
        <i className="far fa-times-circle "></i>
      </button>
    </div>
  );
}
