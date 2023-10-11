const CurrentStatsWidget = (currentData) => {
  const { temp_c, precip_mm, humidity, feelslike_c, uv } = currentData.data;

  return (
    <div className="current-stats">
      <h2>{temp_c} °C</h2>
      <h5>Feels like: {feelslike_c} °C</h5>
      <div className="details">
        <p>
          <strong>UV:</strong> {uv}
        </p>
        <p>
          <strong>Rain:</strong> {precip_mm} mm
        </p>
        <p>
          <strong>Humidity:</strong> {humidity} %
        </p>
      </div>
    </div>
  );
};

export default CurrentStatsWidget;
