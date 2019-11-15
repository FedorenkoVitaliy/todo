import React from 'react';
import ToDoListItem from "../ToDoListItem";
import './ToDoList.css';

const ToDoList = ( { todos, onItemDeleted, onToggleDone, onToggleImportant, onToggleStatus } ) => {

    const elements = todos.map((item) => {
        const {id} = item;
        return(
            <li key={id}
                className='list-group-item'
            >
                <ToDoListItem
                    {...item} //label={item.label} important={item.important}
                    onItemDeleted = {() => onItemDeleted}
                    onToggleImportant = {() => onToggleImportant}
                    onToggleDone = {() => onToggleDone}
                    onToggleStatus = {onToggleStatus}
                />
            </li>
        );
    });

    return(
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
};

export default ToDoList;