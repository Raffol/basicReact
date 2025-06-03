import React from "react";

export default function TodoItem({todo, onDelete, onToogle}) {
    return (
        <li>
            <input type="checkbox"
            checked={todo.completed}
                   onChange={() => onToogle(todo.id)}
            />
            <span style={{extDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </span>
            <button onClick={()=>onDelete(todo.id)}>
                Delete
            </button>
        </li>
    );
};