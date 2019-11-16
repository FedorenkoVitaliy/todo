import React, {Component} from 'react';
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component{
    state={
        buttons: [
            {
                name: 'all',
                label: 'All',
            },
            {
                name: 'done',
                label: 'Done',
            },
            {
                name: 'active',
                label: 'Active',
            },
        ],
    };

    render(){
        const filterElem = this.state.buttons.map(({name, label}) => {
            const clazz = this.props.filterBy===name?
                'btn-info':
                'btn-outline-secondary';
            return(
                <button key={name}
                        type='button'
                        className={`btn ${clazz}`}
                        onClick={() => this.props.onFilterChange(label)}
                >
                    {label}
                </button>
            );
        });
        return (
            <div className='btn-group'>
                {filterElem}
            </div>
        );
    }
}