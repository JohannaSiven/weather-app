import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

const SearchLocation = ({ ...props }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        placeholder="Search for city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => props.handleSearch(searchTerm)}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchLocation;
