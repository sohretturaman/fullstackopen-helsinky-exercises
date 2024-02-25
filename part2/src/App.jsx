/** @format */

import React, { useState } from "react";

import DetailsComp from "./DetailsComp";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isShown, setIsShown] = useState(false);

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

  const handleShow = () => {
    console.log("is clicked and data", countries);
    setIsShown(!isShown);
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
          countries.map((country) => {
            return (
              <div>
                <p>{country.name.common}</p>
                <button onClick={handleShow}>show</button>
                {isShown && <DetailsComp country={country} />}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
