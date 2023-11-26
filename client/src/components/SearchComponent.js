import React, { useState } from 'react';
import '../styles/SearchComponent.css'; // Import your stylesheet

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Search Text:', searchText);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter country name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
