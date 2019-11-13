import React, {Component}from 'react';
import AppHeader from "../AppHeader";
import ItemStatusFilter from "../ItemStatusFilter"
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import './App.css';

export default class App extends Component{
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
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ]
            }
        })
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
                          onDeleted={this.deleteItem}
                />
            </div>
        );
    }
};
