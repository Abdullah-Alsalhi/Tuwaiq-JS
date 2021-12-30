import React, {useState} from "react";

export default function Add(props) {
  const [newTitle, setNewTitle] = useState("");

  
  const createNewTodo = ()=>{
  
    console.log("Add component")
  
    props.creatTaskFunction({title: newTitle, isCompleted: false})
  }
  
  return (
    <div className="Add">
      <input
      className="form-control"
        type="text"
        placeholder="Task..."
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      ></input>
      <button className="fas mt-3 btn btn-outline-success" onClick={createNewTodo}><i class="fas fa-thumbtack"></i></button>
    </div>
  );
}