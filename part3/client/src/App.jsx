/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Persons from "./Persons";

//const baseUrl = "http://localhost:3001/api/persons";

const App = () => {
  const [data, setData] = useState({});
  const getAll = async () => {
    const response = await axios.get("http://localhost:3001/api/persons");
    setData(response.data.data);

    /*     await fetch("http://localhost:3001/api/persons")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        console.log("data", data.data);
      }); */
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {data.length > 0 && <Persons persons={data} />}
    </div>
  );
};

export default App;
