import React from "react";
import '../TodoApp/Todo.css'

function AddTodo({text,setText}) {
  return (
    <>
      <input
      className="inp"
        type="text"
        value={text}
        placeholder="Enter your text..."
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default AddTodo;
