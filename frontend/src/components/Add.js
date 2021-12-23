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
        type="text"
        placeholder="Add New Task"
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      ></input>
      <button onClick={createNewTodo}>Creat New Task</button>
    </div>
  );
}