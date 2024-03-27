import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './styles.scss'

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ]

    const handleTodoClick = (todo, idx) => {
        console.log(todo, idx);
        //step 1: clone current array to new
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        setTodoList(newTodoList);
    };
    const [todoList, setTodoList] = useState(initTodoList);

    const [filterShow, setFilterShow] = useState('all');

    const handleShowNewClick = () => { setFilterShow('new') };
    const handleShowCompletedClick = () => { setFilterShow('completed') };
    const handleShowAllClick = () => { setFilterShow('all') };

    const renderTodoList = todoList.filter(todo => filterShow === 'all' || filterShow === todo.status);

    return (
        <>
            <header>
                <div class="px-3 py-2 bg-dark text-white">
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                            </a>

                            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a href="#" class="nav-link text-secondary">
                                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link text-white">
                                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link text-white">
                                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link text-white">
                                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link text-white">
                                        <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                                        Customers
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <button type="button" class="btn btn-light text-dark me-2">Login</button>
                                    <button type="button" class="btn btn-primary">Sign-up</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="px-3 py-2 border-bottom mb-3">
                    <div class="container d-flex flex-wrap justify-content-center">
                        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                            <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                        </form>
                    </div>
                </div>
            </header>
            <div>
                <h3>Todo List</h3>
                <TodoList todoList={renderTodoList} setTodoList={setTodoList} onTodoClick={handleTodoClick} initTodoList={initTodoList} />
            </div>
            <div className='button-click'>
                <button className='button-click-new' onClick={() => handleShowNewClick('new')}>Show new</button>
                <button className='button-click-completed' onClick={() => handleShowCompletedClick('completed')}>Show completed</button>
                <button className='button-click-all' onClick={() => handleShowAllClick('all')}>Show all</button>
            </div>
        </>
    );
}

export default TodoFeature;