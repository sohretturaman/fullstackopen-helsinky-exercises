/** @format */

const Apikey = process.env.WEATHER_API_KEY;

export const convertGeocode = async (cityName) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${Apikey}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log("an error occured", err));

  return response;
};

export const getCurrentWeather = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Apikey}`
  )
    .then((res) => res.json())
    .catch((err) => console.log("an error occured", err));

  return response;
};
