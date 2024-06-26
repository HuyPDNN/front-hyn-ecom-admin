import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    setTodoList: () => { },
    onTodoClick: null
}

function TodoList({ todoList, setTodoList, onTodoClick, initTodoList }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;

        onTodoClick(todo, idx);
    };

    return (
        <div>
            <ul className='todo-list'>
                {todoList.map((todo, idx) => (
                    <li
                        key={todo.id}
                        className={
                            classnames({
                                'todo-item': true,
                                completed: todo.status === 'completed'
                            })
                        }
                        onClick={() => handleTodoClick(todo, idx)}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default TodoList;