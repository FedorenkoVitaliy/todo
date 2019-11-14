import React, {Component}from 'react';
import AppHeader from "../AppHeader";
import ItemStatusFilter from "../ItemStatusFilter"
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import AddItemForm from "../AddItem";
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            todoData: [
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
            ]
        };
        this.onItemAdded = this.onItemAdded.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange = (text) => {
        console.log(text);
    };

    onItemAdded = (text) =>{
        //event.preventDefault();
        //create id

        const id = this.state.todoData.length;
        console.log(id);
        //add element
        let newItem = {
            id: id,
            label: text,
            important: false,
        };

        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem]
            };
        });
    };

    render(){
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ToDoList todos={this.state.todoData}
                          onDeleted={(id) => console.log(id)}
                />
                <AddItemForm onHandleChange={this.onHandleChange}
                             onItemAdded={this.onItemAdded}
                />
            </div>
        );
    }
};

export default App;