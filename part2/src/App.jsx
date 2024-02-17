/** @format */

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "" }]);
  const [newName, setNewName] = useState("");

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
    setPersons((prev) => [{ name: newName }, ...prev]);
    setNewName("");
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
      {persons.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name} </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
