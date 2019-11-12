import React from 'react';
import './SearchPanel.css'

const SearchPanel = () => {
    const searchText = 'type to search';

    return <input
        type="text"
        placeholder={searchText}
        className="form-control search-input"
    />;
};

export default SearchPanel