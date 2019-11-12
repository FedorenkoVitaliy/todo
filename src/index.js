import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
    const searchText = 'type here to search';
    const searchStyle = {
        padding: '5px'
    };
    return <input
        type="text"
        placeholder={searchText}
        className="input"
        style={searchStyle}
    />;
};

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App']
    return(
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    )
};

ReactDOM.render(<App/>,
    document.getElementById('root')
);