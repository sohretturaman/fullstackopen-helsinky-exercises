/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Persons from "./Persons";
import PersonsForm from "./PersonsForm";

//const baseUrl = "http://localhost:3001/api/persons";

const App = () => {
  const [data, setData] = useState({});
  const [newName, setnewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const getAll = async () => {
    const response = await axios.get("http://localhost:3001/api/persons");
    setData(response.data.data);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleInput = () => {
    console.log("newName", newName);
    console.log("newNumber", newNumber);
    axios
      .post("http://localhost:3001/api/persons", {
        name: newName,
        number: newNumber,
      })
      .then((response) => {
        console.log("response in axios", response);
        getAll();
        setnewName("");
        setNewNumber("");
      });
  };
  const handleDelete = (id) => {
    console.log("pressed person id", id);
  };
  return (
    <div>
      <h1>Hello World</h1>
      <PersonsForm
        newName={newName}
        setNewName={setnewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleForminput={handleInput}
      />
      {data.length > 0 && (
        <Persons persons={data} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default App;
