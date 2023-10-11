const API_URL = process.env.REACT_APP_LOCATION_API_URL;

const getUserLocation = async () => {
  const coordinates = await getUserCoordinates;
  const location = await coordinatesToLoc(coordinates);

  return location;
};

const getUserCoordinates = async () => {
  const geolocationAPI = navigator.geolocation;
  if (!geolocationAPI) {
    alert(`Geolocation not possible in your browser.`);
  } else {
    geolocationAPI.getCurrentPosition(
      (position) => {
        const { coords } = position;
        return coords;
      },
      (err) => {
        alert(`Something went wrong retrieving your location.`, err);
      }
    );
  }
};

const coordinatesToLoc = async (coordinates) => {
  const { latitude, longitude } = coordinates;
  const res = await fetch(
    `${API_URL}?latitude=${latitude}&longitude=${longitude}`
  ).catch((err) => console.err(`Error retrieving location`, err));
  const locationData = await res.json();
  const { city } = locationData;
  return city;
};

export default getUserLocation;
