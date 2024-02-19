/** @format */

import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonsFrom from "./PersonsFrom";
import Persons from "./Persons";
import personsData from "../db.json";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(personsData.persons);
  const [newNote, setNewNote] = useState("");

  //  console.log("persons data", personsData.persons);

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
    const newPersonObject = {
      name: newName,
      number: newNumber,
    };
    setPersons((prev) => [
      { name: newPersonObject.name, number: newPersonObject.number },
      ...prev,
    ]);
    axios
      .post("http://localhost:3000/persons", newPersonObject)
      .then((response) => {
        console.log("resposne data  in localhost", response);
      });
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
      <Persons persons={persons} />
    </div>
  );
};

export default App;

/* const addNote = (event) => {
  event.preventDefault();
  const noteObject = {
    content: newNote,
    important: Math.random() < 0.5,
  };

  axios.post("http://localhost:3001/notes", noteObject).then((response) => {
    console.log("resposne data  in localhost", response);
  });


  => to conncet  local server 
  1=> npm install json-server
  2=> npx json-server db.json
}; */
