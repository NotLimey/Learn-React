import React from 'react';
import '../css/todoListItem.css';

const TodoListItem = ({todo, onRemovePressed}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="btns">
            <button className="completed-btn">Done</button>
            <button 
                onClick={() => onRemovePressed(todo.text)}
                className="remove-btn">Remove</button>
        </div>
    </div>
);

export default TodoListItem;
