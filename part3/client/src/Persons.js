/** @format */

import React from "react";

const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons?.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.name}
              {item.number}

              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Persons;
