import React from 'react';
import "./AddItemForm.css";

class AddItemForm extends React.Component{
    constructor(){
        super();
        this.state = {};

    }

    onHandleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.newTask || '');
    };

    render(){
        return (
            <form className='add-item-form'
                  onSubmit={this.onSubmit}
            >
                <input type="text"
                       className='form-control'
                       name='newTask'
                       onChange={this.onHandleChange}
                       placeholder='What need to be done'
                />
                <button className='btn btn-outline-secondary'>
                    Add item
                </button>
            </form>
        );
    }
}

export default AddItemForm;