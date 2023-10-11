const LocationWidget = (locationData) => {
  const { name, region, country, localtime } = locationData.data;
  return (
    <>
      <h3>Your location: {name}</h3>
      <h5>{region}</h5>
      <h3>{country}</h3>
      <p>{localtime}</p>
    </>
  );
};

export default LocationWidget;
