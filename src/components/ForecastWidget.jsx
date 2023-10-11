import { useState } from 'react';
import { ReactComponent as ThermometerIcon } from '../icons/thermometer.svg';
import { ReactComponent as RainIcon } from '../icons/rain.svg';
import { ReactComponent as Sunrise } from '../icons/sunrise.svg';
import { ReactComponent as Sunset } from '../icons/sunset.svg';
import { ReactComponent as MaxTemp } from '../icons/max.svg';
import { ReactComponent as MinTemp } from '../icons/min.svg';

const filterRemainingHrs = (hoursArr) => {
  const currentHour = new Date().getHours();
  return hoursArr.filter(
    (h) => h.time.split(' ')[1].split(':')[0] > currentHour
  );
};

// convert 12h time to 24h time to match style elsewhere in the app
// API returns AM/PM format for this one data point for whatever reason
const convert12To24h = (time12h) => {
  if (time12h.includes('PM')) {
    let [h, rest] = time12h.split(':');
    h = Number(h) + 12;
    let [m] = rest.split(' ');
    return `${h}:${m}`;
  } else {
    return time12h.substring(0, time12h.length - 3);
  }
};

const usesDarkFill = (theme) => {
  const darkFillThemes = [
    'clear-day',
    'cloudy-day',
    'rainy-day',
    'snowy-day',
    'foggy',
    'default',
  ];

  return darkFillThemes.includes(theme) ? true : false;
};

const ForecastWidget = (forecastData, theme) => {
  const { astro, hour } = forecastData.data;
  const [toggle, setToggle] = useState('temp');

  const remainingHoursInDay = filterRemainingHrs(hour);
  const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const convertedSunset = convert12To24h(astro.sunset);
  const convertedSunrise = convert12To24h(astro.sunrise);

  const handleToggle = (option) => {
    setToggle(option);
  };

  const iconStyle = usesDarkFill(forecastData.theme) ? '#00243d' : '#d8dfe5';

  return (
    <div className="forecast">
      <div className="forecast-heading">
        <div className="astro">
          <div className="sunrise">
            <p>{convertedSunrise}</p>
            <Sunrise fill={iconStyle} />
          </div>
          <div className="sunset">
            <Sunset fill={iconStyle} />
            <p>{convertedSunset}</p>
          </div>
        </div>
        {/* <div className="max-min-temp">
          <div className="max-temp">
            <MaxTemp />
            <p>{day.maxtemp_c} °C</p>
          </div>
          <div className="minTemp">
            <MinTemp />
            <p>{day.mintemp_c} °C</p>
          </div>
        </div> */}
        <h3>{dayOfWeek}</h3>
        <div className="menu">
          <button
            className={`menu-btn ${toggle === 'temp' && 'active'}`}
            onClick={() => handleToggle('temp')}
          >
            <ThermometerIcon />
          </button>
          <button
            className={`menu-btn ${toggle === 'resp' && 'active'}`}
            onClick={() => handleToggle('resp')}
          >
            <RainIcon />
          </button>
        </div>
      </div>

      <div className="hourly-forecast">
        <ul className="forecast-scroller">
          {remainingHoursInDay.map((h) => (
            <li
              key={h.time}
              className="forecast-scroller-item"
            >
              <h4>{h.time.split(' ')[1].substring(0, 2)}</h4>
              <img
                src={h.condition.icon}
                alt="weather icon"
                width="32px"
              />
              {toggle === 'temp' && <h5>{h.temp_c} °C</h5>}
              {toggle === 'resp' && <h5>{h.chance_of_rain} %</h5>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForecastWidget;
