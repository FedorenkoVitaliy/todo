import React from 'react';
import './SearchPanel.css'

class SearchPanel extends React.Component {
    state = {
        term: ''
    };

    onHandleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
        this.props.onSearchChange(value);
    };

    render(){
        return (
            <input
                type="text"
                placeholder='Type to search'
                className="form-control search-input"
                value={this.state.term}
                name='term'
                onChange={this.onHandleChange}
            />
        );
    }
};

export default SearchPanel