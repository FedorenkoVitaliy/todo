import React from 'react';
import './SearchPanel.css'

class SearchPanel extends React.Component {
    constructor(){
        super();
        this.state = {
            toSearch: ''
        };
    }

    onHandleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
        this.props.onSearch(value);
    };

    render(){
        return (
            <input
                type="text"
                placeholder='type to search'
                className="form-control search-input"
                value={this.state.toSearch||''}
                name='toSearch'
                onChange={this.onHandleChange}
            />
        );
    }
};

export default SearchPanel