import React from "react";

export default function Todo(props) {
  return (
    <div>
      <h1>
        Title: <strong>{props.title}</strong>
      </h1>
      <h2>Status: {props.completed === true? "Done": "Pending"}</h2>
    </div>
  );
}
