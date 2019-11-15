import React from 'react';
import "./ToDoListItem.css";

const ToDoListItem = ({id, label, onToggleStatus, done, important}) => {
    let classNames = 'todo-list-item';
    if(done){
        classNames += ' done'
    }
    if(important){
        classNames += ' important'
    }

    return (
        <span className={classNames}>
        <span className='todo-list-item-label'
              onClick={() => onToggleStatus(id, 'done')}
        >
            { label }
        </span>
        <button type='button'
                className='btn btn-outline-success btn-sm float-right'
                onClick={() => onToggleStatus(id, 'important')}
        >
            <i className='fa fa-exclamation'/>
        </button>
        <button type='button'
                className='btn btn-outline-danger btn-sm float-right'
                onClick={() => onToggleStatus(id,'delete')}
        >
            <i className='fa fa-trash-o'/>
        </button>
    </span>
    );
};

export default ToDoListItem;