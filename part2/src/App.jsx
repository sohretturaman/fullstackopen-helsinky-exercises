/** @format */

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  const filterPersons = () => {
    const trimmedName = search.trim();
    if (trimmedName === "") {
      setFilteredPersons([]);
      return;
    }
    const filteredData = persons.filter((item) => {
      return item.name.toLowerCase().includes(trimmedName.toLowerCase());
    });
    console.log("filterd data", filteredData);

    setFilteredPersons(filteredData);
  };
  const findSame = (item) => {
    const isExist = persons.find((person) => person.name === item);
    return isExist ? isExist.name : null;
  };

  const handleInput = (e) => {
    e.preventDefault();
    const result = findSame(newName);
    filterPersons();
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
          Search:{" "}
          <input
            placeholder="Search.."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
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

      <h2>Filtered Persons</h2>
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
      <br />
      <br />
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
