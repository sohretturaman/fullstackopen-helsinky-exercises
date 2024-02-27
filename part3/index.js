/** @format */

const http = require("http");
const data = require("./data");
/*
const axios = require("axios");

const express = require("express");
const app = express();

 app.get("/api/persons", (req, res) => {
  res.json(data);
}); */
http
  .createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    //res.write("<h1>Hello World</h1>");
    res.end();
  })
  .listen(3001, () => {
    console.log("server is running on port 3001");
  });
/* axios
  .get("https://localhost:30001/api")
  .then((response) => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch((error) => {
    console.log(error);
  });
 */

/* app.listen(3001, () => {
  console.log("server is running on port 3001");
}); */
