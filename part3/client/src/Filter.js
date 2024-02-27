/** @format */

import React from "react";

const Filter = ({ search, setSearch, filteredPersons, filterPersons }) => {
  return (
    <div>
      Search:{" "}
      <input
        placeholder="Search.."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={filterPersons}>Search</button>
      <br />
      <br />
      <h5>Filtered Persons</h5>
      {filteredPersons.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.name}
              {item.number}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
