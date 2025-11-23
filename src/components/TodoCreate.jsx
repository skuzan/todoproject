import React, { useState } from "react";

const TodoCreate = ({ onCreateTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Date.now(),
      content: newTodo,
    };

    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todo-create">
      <input
        type="text"
        placeholder="TODO giriniz..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={createTodo}>EKLE</button>
    </div>
  );
};

export default TodoCreate;
