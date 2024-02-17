/** @format */

import React from "react";

const Persons = ({ persons }) => {
  return (
    <div>
      {persons?.map((item, index) => {
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

export default Persons;
