/** @format */

// App.js
import React, { useEffect, useState } from "react";

import DetailsComp from "./DetailsComp";
import { convertGeocode, getCurrentWeather } from "./services/HttpWeather"; // Import getCurrentWeather function

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null); // State to store the selected country
  const [weather, setWeather] = useState(null); // State to store weather data

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${query}`
      );
      const data = await response.json();
      if (data.length > 10) {
        setErrorMessage("Too many matches, please be more specific.");
      } else {
        setCountries(data);
        console.log("data in fetch", data[0]);

        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Error fetching data. Please try again.");
    }
  };

  const handleShow = async (cityName) => {
    // Set the selected country based on the cityName
    const selectedCountry = countries.find(
      (country) => country.name.common === cityName
    );
    setSelectedCountry(selectedCountry);

    // Fetch weather data when showing details
    const result = await convertGeocode(cityName);
    if (result && result.length > 0) {
      const { lat, lon } = result[0];
      console.log("lat and lan", lat, lon);
      const weatherData = await getCurrentWeather(lat, lon);
      console.log("weather data in show", weatherData);
      setWeather(weatherData);
    }
  };

  return (
    <div>
      <h1>Country Information</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        {countries.length > 0 &&
          countries.map((country) => (
            <div key={country.name.common}>
              <p>{country.name.common}</p>
              <button onClick={() => handleShow(country.name.common)}>
                show
              </button>
              {selectedCountry &&
                selectedCountry.name.common === country.name.common && (
                  <DetailsComp country={country} weather={weather} />
                )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
