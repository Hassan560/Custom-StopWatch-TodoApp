import React from "react";
import UseTodoApp from "../../Hooks/TodoApp/UseTodoApp";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import "../TodoApp/Todo.css";

function TodoApp() {
  const { text, setText, item, setItem } = UseTodoApp();
  const submit = (e) => {
    e.preventDefault();
    if (text.length > 3) {
      setItem([...item, text]);
      setText("");
    } else {
      alert("Oops! Todos must be over 3 chars long");
    }
  };
  const deleteAll = () => {
    setItem([]);
  };
  return (
    <div>
      <h1>Todo Application</h1>
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <button onClick={deleteAll} className="btn3">
          Delete All
        </button>
      <form onSubmit={submit}>
        <AddTodo text={text} setText={setText} />
        <button className="btn" type="submit">
          Add Todo
        </button>
      </form>
        </div>
      <TodoItems item={item} text={text} setItem={setItem} />
      </div>
  );
}

export default TodoApp;
