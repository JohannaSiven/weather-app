import React, { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import SearchLocation from './components/SearchLocation';

import './App.css';

import Weekly from './components/Weekly';

import getUserLocation from './utils/location';

function App() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    // when page renders for the first time, get location and set it
    getUserLocation()
      .then((loc) => setLocation(loc))
      .catch((err) => console.err(err));
  }, []);

  // when search term entered, update weather data accordingly
  const handleSearch = (searchTerm) => {
    setLocation(searchTerm);
  };

  return (
    <>
      <div>
        <SearchLocation handleSearch={handleSearch} />
        {!!location && <Weekly city={location} />}
      </div>
    </>
  );
}

export default App;
