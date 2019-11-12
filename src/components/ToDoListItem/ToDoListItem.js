import React from 'react';
import "./ToDoListItem.css";

class ToDoListItem extends React.Component{
    constructor(){
        super();
        this.state = {
            done: false,
            important: false,
        };

        this.onLabelClick = () => {
            this.setState({done: true})
        };

        this.toggleImportant = () => {
            this.setState({important: !this.state.important})
        };
    }

    render(){
        const { label } = this.props;
        const { done, important } = this.state;
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
                  onClick={this.onLabelClick}
            >
                { label }
            </span>
            <button type='button'
                    className='btn btn-outline-success btn-sm float-right'
                    onClick={this.toggleImportant}
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