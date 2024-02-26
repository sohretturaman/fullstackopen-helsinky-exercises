/** @format */

// DetailsComp.jsx
import React from "react";

const DetailsComp = ({ country, weather }) => {
  var listOfLanguages = Object.values(country.languages);

  return (
    <div>
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <p>Languages:</p>
        <ul>
          <li>{listOfLanguages[0]}</li>
          {listOfLanguages[1] && <li>{listOfLanguages[1]}</li>}
          {listOfLanguages[2] && <li>{listOfLanguages[2]}</li>}
          {listOfLanguages[3] && <li>{listOfLanguages[3]}</li>}
        </ul>
        <img
          src={country.flags.png}
          alt="logo"
          style={{ height: 100, width: 100 }}
        />
      </div>
      {weather && (
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>Temperature: {weather.main.temp}</p>
          <p>Description: {weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          />
          {/* You can display other weather data here */}
        </div>
      )}
    </div>
  );
};

export default DetailsComp;
