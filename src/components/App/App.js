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
    }

    onHandleChange = (text) => {
        console.log(text);
    };

    onItemAdded = (text) =>{
        const id = this.state.todoData.length;

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

    onItemDeleted = (id) => {
        const idx = this.state.todoData.findIndex((el) => el.id === id);
        this.setState(({todoData}) =>{
            return{
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx+1)]
            }
        })
    };

    onToggleDone = (id) => {
        console.log('done', id);
    };

    onToggleImportant = (id) => {
        console.log('important', id);
    };

    onToggleStatus = (id, action) =>{
        switch(action){
            case 'delete' : this.onItemDeleted(id); break;
            case 'done' : this.onToggleDone(id); break;
            case 'important' : this.onToggleImportant(id); break;
            default:  break;
        }
    };

    render(){
        return (
            <div className="todo-app">
                <AppHeader toDo = {1} done = {3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ToDoList todos = {this.state.todoData}
                          onToggleStatus = {this.onToggleStatus}
                />
                <AddItemForm onHandleChange={this.onHandleChange}
                             onItemAdded={this.onItemAdded}
                />
            </div>
        );
    }
};

export default App;