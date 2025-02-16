import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, className }) => {
    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    };

    return (
      <div className={className}>
        <input
            type="text"
            placeholder="Căutați în pagină..."
            onChange={handleSearchChange}
        />
      </div>
    );
};

export default SearchBar;