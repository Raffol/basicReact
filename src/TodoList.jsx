import React from "react";
import TodoItem from "./TodoItem.jsx";

export default function TodoList({todos, onDelete, onToggle}) {
    return(
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToogle={onToggle}
                />
            ))}
        </ul>
    );
}