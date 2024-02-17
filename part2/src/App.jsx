/** @format */

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "" }]);
  const [newName, setNewName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    console.log("new name", newName);
    setPersons((prev) => [...prev, { name: newName }]);
    setNewName("");
    console.log("persons", persons);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleInput}>
        <div>
          name:{" "}
          <input
            placeholder="enter a new name"
            name="firstname"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((item) => {
        return (
          <div>
            <p>{item.name} </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
