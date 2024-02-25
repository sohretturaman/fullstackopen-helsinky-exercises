/** @format */

import React from "react";

const DetailsComp = ({ country }) => {
  let listOfLanguages = Object.values(country.languages);
  console.log("country in comp ", listOfLanguages[0]);
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
    </div>
  );
};

export default DetailsComp;
