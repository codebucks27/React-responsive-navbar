import React, { useState } from 'react';
import './Search.css';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform the search logic here
    // You can use an API, filter an existing data array, etc.
    // Update the searchResults state with the search results
    setSearchResults(/* Perform search operation based on searchTerm */);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter your search term"
        className="search-input"
      />
      <button onClick={handleSearch} className="button">Search</button>

      {/* Render the search results */}
      <ul className="search-results">
        {searchResults.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;