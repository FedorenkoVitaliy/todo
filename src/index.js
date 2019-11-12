import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ToDoList from "./components/ToDoList";
import ItemStatusFilter from "./components/ItemStatusFilter"
import './index.css';

const App = () => {
    const todoData = [
        {
            id:1,
            label: 'Drink Coffee',
            important: false,
        },
        {   id:2,
            label: 'Build Awesome App',
            important: true,
        },
        {
            id:3,
            label: 'Have a lunch',
            important: false,
        }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <ToDoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App/>,
    document.getElementById('root')
);