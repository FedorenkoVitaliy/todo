import React from 'react';
import ToDoListItem from "../ToDoListItem";
import './ToDoList.css';

const ToDoList = ( { todos, onDeleted } ) => {

    const elements = todos.map((item, index) => {
        const {id, ...restItem} = item;
        return(
            <li key={index}
                className='list-group-item'
            >
                <ToDoListItem
                    {...restItem} //label={item.label} important={item.important}
                    onDeleted = {() => onDeleted(id)}
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