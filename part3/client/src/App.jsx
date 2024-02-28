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
      })
      .catch((error) => {
        // Handle error here
        console.error("Error occurred:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log(
            "Server responded with status code:",
            error.response.status
          );
          console.log("Error message:", error.message);
          // Handle error message display or any other action
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something else happened while setting up the request
          console.error("Error setting up request:", error.message);
        }
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
      {data?.length > 0 && (
        <Persons persons={data} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default App;
