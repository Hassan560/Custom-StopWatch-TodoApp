import { useState } from "react";

function UseTodoApp() {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);
  return { text, setText, item, setItem };
}

export default UseTodoApp;
