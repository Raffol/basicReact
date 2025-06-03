import React, {useState} from "react";

export default function TodoInput({onAdd})
{
    const [text, setText] = useState('');
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (text.trim() !== '')
        {
            onAdd(text);
            setText('');
        }
    };

    return(
    <form onSubmit={handleSubmit}>
        <input type="text"
                placeholder="Добавить задачу"
                value={text}
                onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add task</button>
    </form>
    );
}