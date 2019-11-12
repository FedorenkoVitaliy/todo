import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ToDoList from "./components/ToDoList";

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
        <div>
            <AppHeader />
            <SearchPanel />
            <ToDoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App/>,
    document.getElementById('root')
);