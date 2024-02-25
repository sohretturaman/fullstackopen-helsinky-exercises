/** @format */

import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

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
        {countries.map((country) => {
          let listOfLanguages = Object.values(country.languages);
          console.log("country", listOfLanguages[0]);

          return (
            <div key={country.name.common}>
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
          );
        })}
      </div>
    </div>
  );
};

export default App;
