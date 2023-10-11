const API_URL = process.env.REACT_APP_WEATHER_API_URL;
const API_ENDPOINT = process.env.REACT_APP_WEATHER_API_ENDPOINT;
const key = process.env.REACT_APP_WEATHER_API_KEY;
const days = 7;

const getWeatherData = async (city) => {
  const res = await fetch(
    `${API_URL}${API_ENDPOINT}?key=${key}&q=${city}&q=days=${days}&aqi=no`
  );
  const weatherData = await res.json();
  return weatherData;
};

export default getWeatherData;
