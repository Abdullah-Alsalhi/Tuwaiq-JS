import React from "react";

export default function Card(props) {
  return (
    <div className="Card">
      <span id="title" style={{ backgroundColor: props.obj.color }}>
        Title: {props.obj.title}
      </span>
      <span>
        <img id="image" src={props.obj.img} alt="logo"></img>
      </span>
    </div>
  );
}
