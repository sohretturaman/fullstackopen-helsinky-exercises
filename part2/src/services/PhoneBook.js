/** @format */

import axios from "axios";

const baseUrl = "http://localhost:3000/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const Add = (newObject) => {
  return axios.post(baseUrl, newObject); // create a new object here
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject); //important!! update the object here with id
};

const deletePerson = (id) => {
  return axios.delete(baseUrl, id);
  //test it
};

export default {
  getAll,
  Add,
  update,
  deletePerson,
};

// multi  default exporting !!
