import React from 'react';
import "./AddItemForm.css";

class AddItemForm extends React.Component{
    constructor(){
        super();
        this.state = {

        };

    }

    render(){
        const {onItemAdded, onHandleChange} = this.props;
        return (
            <div
                  className='add-item-form'
            >
                <input type="text"
                       onChange={() => onHandleChange('handle text')}
                />
                <button className='btn btn-outline-secondary'
                        onClick={() => onItemAdded('Hello Word')}
                >
                    Add item
                </button>
            </div>
        );
    }
}

export default AddItemForm;