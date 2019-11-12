import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ToDoList from "./components/ToDoList";

const App = () => {
    const todoData = [
        {
            label: 'Drink Coffee',
            important: false,
        },
        {
            label: 'Build Awesome App',
            important: true,
        },
        {
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