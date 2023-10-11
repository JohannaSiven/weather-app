import React, { useState, useEffect } from 'react';
import getWeatherData from '../utils/weather';
import LocationWidget from './LocationWidget';
import ForecastWidget from './ForecastWidget';
import CurrentWeatherWidget from './CurrentWeatherWidget';

const Weekly = ({ ...props }) => {
  const { city } = props;

  const [weatherData, setWeatherData] = useState([]);

  const refreshLocaleData = (city) => {
    getWeatherData(city).then((weather) => setWeatherData(weather));
  };

  useEffect(() => {
    refreshLocaleData(city);
  }, [city]);

  const { current, location, forecast } = weatherData;

  return (
    <div>
      {!!location && <LocationWidget data={location} />}
      {!!current && <CurrentWeatherWidget data={current} />}
      {!!forecast &&
        forecast.forecastday.map((day) => (
          <ForecastWidget
            key={day.date}
            data={day}
          />
        ))}
    </div>
  );
};

export default Weekly;
