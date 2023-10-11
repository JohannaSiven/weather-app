const CurrentWeatherWidget = (currentData) => {
  const { condition, wind_kph, wind_dir } = currentData.data;

  return (
    <div className="current-weather-data">
      <div className="current-conditions">
        <img
          className="condition-icon"
          src={condition.icon}
          alt="weather icon"
        />
        <h3>{condition.text}</h3>
        <p>
          Wind: {wind_kph} km/h to {wind_dir}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeatherWidget;
