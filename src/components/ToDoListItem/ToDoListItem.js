import React from 'react';
import "./ToDoListItem.css";

class ToDoListItem extends React.Component{
    constructor(){
        super();
        this.onLabelClick = () => {
            console.log(`Done: ${this.props.label}`);
        }
    }

    render(){
        const { label, important = false } = this.props;

        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className='todo-list-item'>
            <span style={style}
                  className='todo-list-item-label'
                  onClick={this.onLabelClick}
            >
                { label }
            </span>
            <button type='button'
                    className='btn btn-outline-success btn-sm float-right'
            >
                <i className='fa fa-exclamation'/>
            </button>
            <button type='button'
                    className='btn btn-outline-danger btn-sm float-right'
            >
                <i className='fa fa-trash-o'/>
            </button>
        </span>
        );
    }
}

export default ToDoListItem;