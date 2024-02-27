/** @format */

var data = require("./data");
const express = require("express");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

/* app.get("/", (req, res) => {
  res.json(data);
}); */

var requestTimeList = [];
app.get("/api/persons", (req, res) => {
  const requestTime = new Date();
  requestTimeList.push(requestTime);
  res.json(data);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = data.find((person) => person.id === id);
  if (person) {
    res.status(200).json({
      message: "person successfully found",
    });
  } else {
    res.status(404).send("person not found");
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const reqId = Number(req.params.id);

  const person = data.find((person) => person.id === reqId);
  if (person) {
    data = data.filter((person) => person.id !== reqId);
    res.status(200).json({
      message: "person is successfully deleted",
      person: person,
    });
  } else {
    res.status(404).send("person not found");
  }
});

app.get("/info", (req, res) => {
  const length = data.length;
  console.log("request time list", requestTimeList);

  res.json({
    message: `Phonebook has info for ${length} people`,
    requestTimeList: requestTimeList,
  });
});
app.listen(3001, () => {});
/* 
GOT DATA FROM APİ WİTH HTTP SERVER
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
 */
