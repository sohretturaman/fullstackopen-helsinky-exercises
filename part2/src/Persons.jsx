/** @format */

import React from "react";

const Persons = ({ persons, handleDelete, toggleImportance }) => {
  return (
    <div>
      {persons?.map((item, index) => {
        const label = item.important ? "make not important" : "make important";
        return (
          <div key={index}>
            <p>
              {item.name}
              {item.number} <button onClick={toggleImportance}>{label}</button>
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
