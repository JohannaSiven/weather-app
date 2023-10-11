const LocationWidget = (locationData) => {
  const { name, region, country, localtime } = locationData.data;
  return (
    <div className="location-data">
      <h2>{name}</h2>
      <h5>{region}</h5>
      <h4>{country}</h4>
      <p>{localtime}</p>
    </div>
  );
};

export default LocationWidget;
