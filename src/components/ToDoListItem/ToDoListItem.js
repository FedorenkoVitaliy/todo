import React from 'react';
import "./ToDoListItem.css";

class ToDoListItem extends React.Component{
    constructor(){
        super();
        this.state = {
            done: false,
        };
        this.onLabelClick = () => {
            this.setState({done: true})
        }
    }

    render(){
        const { label, important = false } = this.props;
        const { done } = this.state;
        let classNames = done ?
            'todo-list-item done':
            'todo-list-item';

        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={classNames}>
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