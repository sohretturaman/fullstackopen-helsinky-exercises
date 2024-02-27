/** @format */

import React from "react";

const PersonsFrom = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  handleInput,
}) => {
  return (
    <div>
      <form onSubmit={handleInput}>
        <br />
        <br />
        <div>
          name:{" "}
          <input
            placeholder="enter a new name"
            name="firstname"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <br />
          Phone:{""}
          <input
            placeholder="enter a new number"
            name="phonenumber"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonsFrom;
