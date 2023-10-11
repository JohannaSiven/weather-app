const ForecastWidget = (forecastData) => {
  const { astro, date, day, hour } = forecastData.data;
  return (
    <>
      <h1>Forecast for your location</h1>
      <p>{date}</p>
      <p>{day.condition.text}</p>
      <img
        src={day.condition.icon}
        alt="weather icon"
      />
    </>
  );
};

export default ForecastWidget;
