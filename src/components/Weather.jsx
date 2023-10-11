import React, { useState, useEffect } from 'react';
import getWeatherData from '../utils/weather';
import LocationWidget from './LocationWidget';
import ForecastWidget from './ForecastWidget';
import CurrentWeatherWidget from './CurrentWeatherWidget';
import CurrentStatsWidget from './CurrentStatsWidget';
import conditionsMap from '../utils/conditions-mapping';

const Weather = ({ ...props }) => {
  const { getTheme, city, theme } = props;

  const [weatherData, setWeatherData] = useState([]);

  const refreshLocaleData = (city) => {
    getWeatherData(city).then((weather) => setWeatherData(weather));
  };

  useEffect(() => {
    refreshLocaleData(city);
  }, [city]);

  const { current, location, forecast } = weatherData;

  if (!!current) {
    const { condition, is_day } = current;
    const cond1 = Object.keys(conditionsMap).find((key) =>
      conditionsMap[key].includes(condition.code)
    );
    const cond2 = is_day ? `day` : `night`;
    const conditionClass = `${cond1 ? cond1 : 'default'}-${
      cond2 ? cond2 : 'default'
    }`;
    getTheme(conditionClass);
  }

  return (
    <div className="weather-data">
      {!!location && !!current && (
        <div className="current-weather">
          <LocationWidget data={location} />
          <CurrentStatsWidget data={current} />
        </div>
      )}
      {!!current && <CurrentWeatherWidget data={current} />}
      {!!forecast &&
        forecast.forecastday.map((day) => (
          <ForecastWidget
            key={day.date}
            data={day}
            theme={theme}
          />
        ))}
    </div>
  );
};

export default Weather;
