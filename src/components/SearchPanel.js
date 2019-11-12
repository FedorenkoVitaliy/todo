import React from 'react';

const SearchPanel = () => {
    const searchText = 'type here to search';
    const searchStyle = {
        padding: '5px'
    };
    return <input
        type="text"
        placeholder={searchText}
        className="input"
        style={searchStyle}
    />;
};

export default SearchPanel