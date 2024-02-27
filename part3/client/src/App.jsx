/** @format */

import React, { useEffect } from "react";
import axios from "axios";

//const baseUrl = "http://localhost:3001/api/persons";

const App = () => {
  const getAll = async () => {
    /*   const response = axios.get("http://localhost:3001/api/persons");
    console.log("response", response); */

    await fetch("http://localhost:3001/api/persons")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
