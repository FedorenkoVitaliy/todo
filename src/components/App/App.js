import React, {Component}from 'react';
import AppHeader from "../AppHeader";
import ItemStatusFilter from "../ItemStatusFilter"
import SearchPanel from "../SearchPanel";
import ToDoList from "../ToDoList";
import AddItemForm from "../AddItem";
import './App.css';

class App extends Component{
    maxId = 100;
    state = {
        todoData: [
            this.createNewElement('Drink Coffee'),
            this.createNewElement('Build Awesome App'),
            this.createNewElement('Have a lunch'),
        ],
        filterBy: undefined,
        searchBy: '',
    };

    createNewElement(label) {
        return{
            label,
            id: this.maxId++,
            done: false,
            important: false,
        }
    };

    onItemAdded = (text) =>{
        let newItem = this.createNewElement(text);

        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem]
            };
        });
    };

    getIndex = (id) => this.state.todoData.findIndex((el) => el.id === id);

    deleteItem = (id) => {
        const idx = this.getIndex(id);
        this.setState(({todoData}) =>{
            return{
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            }
        })
    };

    toggleProperty = (arr, id, propName) => {
        const idx = this.getIndex(id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return[
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    toggleDone = (id) => {
        this.setState(({todoData}) =>{
            return{
                todoData:  this.toggleProperty(todoData, id, 'done')
            };
        })
    };

    toggleImportant = (id) => {
        this.setState(({todoData}) =>{
            return{
                todoData:  this.toggleProperty(todoData, id, 'important')
            };
        })
    };

    onToggleStatus = (id, action) =>{
        switch(action){
            case 'delete' : this.deleteItem(id); break;
            case 'done' : this.toggleDone(id); break;
            case 'important' : this.toggleImportant(id); break;
            default:  break;
        }
    };

    onFilter = (param) => {
       this.setState({filterBy: param});
    };

    onSearch = (param) => {
        this.setState({searchBy: param.toLowerCase()});
    };

    render(){
        const {todoData, filterBy} = this.state;
        const doneCount = todoData.filter(item => item.done===true).length;
        const todoCount = todoData.length - doneCount;
        const searchedList = todoData.filter((elem) => elem.label.toLowerCase().startsWith(this.state.searchBy));
        const filteredList = filterBy===undefined?
            searchedList:
            searchedList.filter((elem) => elem.done===filterBy);
        return (
            <div className="todo-app">
                <AppHeader toDo = {todoCount} done = {doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.onSearch}/>
                    <ItemStatusFilter onFilter={this.onFilter}/>
                </div>
                <ToDoList todos = {filteredList}
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