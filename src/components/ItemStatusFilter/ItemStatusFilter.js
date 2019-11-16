import React, {Component} from 'react';
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component{
    constructor(){
        super();
        this.state={
            buttons: [
                {
                    id:0,
                    value: 'All',
                    done: undefined
                },
                {
                    id:1,
                    value: 'Done',
                    done: true,
                },
                {
                    id:2,
                    value: 'Active',
                    done: false,
                },
            ],
            filterBy: 'All'
        }
    }

    changeFilter(param) {
        this.setState({filterBy: param.value})
        this.props.onFilter(param.done);
    };

    render(){
        const {buttons, filterBy} = this.state;
        const filterElem = buttons.map((elem) => {
            const classes = filterBy===elem.value?
                'btn btn-info':
                'btn btn-outline-secondary';
            return(
                <button key={elem.id}
                        type='button'
                        className={classes}
                        onClick={() => this.changeFilter(elem)}
                >
                    {elem.value}
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