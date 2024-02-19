/** @format */

import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonsFrom from "./PersonsFrom";
import Persons from "./Persons";
import personsData from "../db.json";
import axios from "axios";
import PhoneBook from "./services/PhoneBook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(personsData.persons);
  const [newNote, setNewNote] = useState("");

  //  console.log("persons data", personsData.persons);

  useEffect(() => {
    PhoneBook.getAll().then((res) => {
      //console.log("res.status", res.status, "res.data", res.data);
      setPersons(res.data);
    });
  }, []);

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
      id: Math.floor(Math.random() * (100 - 10)),
      name: newName,
      number: newNumber,
    };

    PhoneBook.Add(newPersonObject).then((res) =>
      console.log("data in add", res.data)
    );

    setPersons((prev) => [
      { name: newPersonObject.name, number: newPersonObject.number },
      ...prev,
    ]);

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
