import React, {useState} from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

export default function App() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Add new link for php page', completed: false},
        {id: 2, text: 'Fix banners', completed: true},
    ]);
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text:text,
            completed: false,
        };
        const deleteTodo = (id) => {
            setTodos(todos.filter(todo=>todo.id !== id));
        };
        const toggleTodo = (id) => {
            setTodos(
                todos.map(todo=>
                    todo.id === id ? {...todo, completed: !todo.completed} : todo
                )
            );
        };
        return(
            <div>
                <h1>To Do List</h1>
                <TodoInput onAdd={addTodo()} />
                <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
            </div>
        );
    }
}