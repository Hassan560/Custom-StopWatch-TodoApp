import React from "react";
import "../TodoApp/Todo.css";

function TodoItems({ item, setItem }) {
  const deleteItems = (id) => {
    const del = item.filter((elem, index) => index !== id);
    setItem(del);
  };
  return (
    <div className="todo__Item">
      {item.map((elem, index) => (
        <div
          style={{
            display: "flex",
            width: "550px",
            margin:'auto',
            marginTop: '5px'
          }}
          key={index}
        >
          <p>{elem}</p>
          <div>
            <button onClick={() => deleteItems(index)} className="btn2">
              Delete
            </button> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItems;
