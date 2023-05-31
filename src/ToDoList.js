import React from "react";
import "./style.css";

const ToDoList = ({ items, onDelete, onToggle }) => {
  return (
    <ul className="todo-list">
      {items.map((el) => (
        <li
          key={el.id}
          className={`todo-item ${el.completed ? "completed" : " "}`}
        >
          <input
            type="checkbox"
            checked={el.completed}
            onChange={() => {
              onToggle(el.id);
            }}
          />
          {el.name}
          <button
            className="btn btn-danger delete-button"
            onClick={() => {
              onDelete(el.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
