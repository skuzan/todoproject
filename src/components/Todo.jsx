import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const [editable, setEditable] = useState(false);
  const { id, content } = todo;
  const [editTodo, setEditTodo] = useState(content);

  const removeTodo = () => {
    const confirm = window.confirm(
      "Bu TODO yu silmek istediğinize emin misiniz?"
    );
    if (confirm) {
      onRemoveTodo(id);
    }
  };
  
      const updateTodo = () => {
      const request = {
        id: id,
        content: editTodo,
      };

      onUpdateTodo(request);
      setEditable(false);
    };
  return (
    <div className="todo-item">
      <div className="todo-text">
        {editable ?           <input
            value={editTodo}
            type="text"
            onChange={(e) => setEditTodo(e.target.value)}
          /> : (content

        )
          
        }
      </div>

      <div className="todo-actions">
        <button className="icon-button delete" onClick={removeTodo}>
          <IoIosRemoveCircle />
        </button>

        {editable ? 
         (
          <button className="icon-button edit" onClick={updateTodo}>
             <FaCheckCircle />
          </button>
        ):
        (
          <button
            button
            className="icon-button edit"
            onClick={() => setEditable(!editable)}
          >
            <FaEdit />
          </button>
        ) 
        
        }
      </div>
    </div>
  );
};

export default Todo;
