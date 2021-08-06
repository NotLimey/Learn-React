import React, {useState, useEffect} from 'react';
import '../css/newTodoForm.css';
import { connect } from 'react-redux';
import { createTodo } from '../actions';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            const isDuplicateText =
                todos.some(todo => todo.text === inputValue);

            if(!isDuplicateText && inputValue !== '') {
                onCreatePressed(inputValue);
                setInputValue('');
                console.log(inputValue);
            }
            event.preventDefault();
            // callMyFunction();
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, [inputValue]);

    return(
    <div className="new-todo-form">
        <div className="new-todo-form-grid">
            <input
                className="new-todo-input" 
                type="text" 
                placeholder="Type your new todo"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
            <button 
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);

                    if(!isDuplicateText && inputValue !== '') {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="new-todo-btn">
                Create Todo Item
            </button>
        </div>
        
    </div>
)};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),     

});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);