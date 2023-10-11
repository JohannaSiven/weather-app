import conditionsMap from '../utils/conditions-mapping';

const CurrentWeatherWidget = (currentData) => {
  const {
    last_updated,
    temp_c,
    is_day,
    condition,
    wind_kph,
    wind_dir,
    precip_mm,
    humidity,
    feelslike_c,
    uv,
    //air_quality,
  } = currentData.data;

  const cond1 = Object.keys(conditionsMap).find((key) =>
    conditionsMap[key].includes(condition.code)
  );
  const cond2 = is_day ? `day` : `night`;

  const conditionClass = `${cond1 ? cond1 : 'default'} ${
    cond2 ? cond2 : 'default'
  }`;

  return (
    <div className={conditionClass}>
      <h1>Current weather at your location</h1>
      <div>
        <p>{condition.text}</p>
        <p>UV: {uv}</p>
        <img
          src={condition.icon}
          alt="weather icon"
        />
      </div>
      <p>Updated: {last_updated}</p>
      <p>Temperature: {temp_c}</p>
      <p>Feels like: {feelslike_c}</p>
      <p>
        Wind: {wind_kph} to {wind_dir}
      </p>
      <p>Rain: {precip_mm}</p>
      <p>Humidity: {humidity}</p>
    </div>
  );
};

export default CurrentWeatherWidget;
