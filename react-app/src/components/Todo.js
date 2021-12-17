import React from "react";

export default function Todo(props) {
  return (
    <div>
      <p className="title">Title: {props.title}</p>
      <p className="completed"> Status: {props.completed === true ? "Done" : "Pending"}</p>
    </div>
  );
}
