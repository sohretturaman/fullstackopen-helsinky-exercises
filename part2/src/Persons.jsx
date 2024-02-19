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
              {item.number}{" "}
              {item.important ? (
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              ) : null}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Persons;
