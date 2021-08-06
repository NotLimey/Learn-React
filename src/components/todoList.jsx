import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, REMOVE_TODO } from '../actions';
import NewTodoForm from './newTodoForm';
import TodoListItem from './todoListItem';
import '../css/todoList.css';


const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="todoList">
        <h2>TODO LIST - {todos.length.toString()}</h2>
        <div className="List-wrapper">
            <NewTodoForm />
            {todos.reverse().map((todo, i) => <TodoListItem key={i.toString()} todo={todo} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);