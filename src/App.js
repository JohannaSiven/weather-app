import React, { useState, useEffect } from 'react';
import SearchLocation from './components/SearchLocation';

import './App.css';

import Weather from './components/Weather';

import getUserLocation from './utils/location';

function App() {
  const [location, setLocation] = useState('');
  const [theme, setTheme] = useState('default');
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

  const handleThemeChange = (weatherConditions) => {
    setTheme(weatherConditions);
  };

  return (
    <div className={`container ${theme}`}>
      <SearchLocation handleSearch={handleSearch} />
      {!!location && (
        <Weather
          city={location}
          getTheme={handleThemeChange}
          theme={theme}
        />
      )}
    </div>
  );
}

export default App;
