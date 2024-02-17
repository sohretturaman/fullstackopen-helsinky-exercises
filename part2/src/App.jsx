/** @format */

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "", number: null }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(null);

  const findSame = (item) => {
    const isExist = persons.find((person) => person.name === item);

    return isExist ? isExist.name : null;
  };
  const handleInput = (e) => {
    e.preventDefault();
    const result = findSame(newName);
    console.log("result", result);
    if (result) {
      console.log(newName + "name is alrady exist");

      return;
    }
    setPersons((prev) => [{ name: newName, number: newNumber }, ...prev]);
    setNewName("");
    setNewNumber("");
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
      <h2>Numbers</h2>
      {persons.map((item, index) => {
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

export default App;
