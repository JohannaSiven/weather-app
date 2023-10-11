import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

const SearchLocation = ({ ...props }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="search-bar">
      <input
        className="search-input"
        placeholder="Search for a city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setSearchTerm(e.target.value);
            props.handleSearch(searchTerm);
          }
        }}
      />
      <button
        className="search-btn"
        onClick={() => props.handleSearch(searchTerm)}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchLocation;
