/** @format */

import { useState } from "react";
import Filter from "./Filter";
import PersonsFrom from "./PersonsFrom";
import Persons from "./Persons";

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
      <Filter
        search={search}
        setSearch={setSearch}
        filterPersons={filterPersons}
        filteredPersons={filteredPersons}
      />

      <h3>Add a new Person</h3>
      <PersonsFrom
        handleInput={handleInput}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <br />
      <h2>Numbers</h2>
      <Persons persons={Persons} />
    </div>
  );
};

export default App;
