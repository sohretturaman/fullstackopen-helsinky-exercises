/** @format */

const { test, describe } = require("node:test");
const assert = require("node:assert");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

test("invalid user is not added", async () => {
  const newUser = {
    username: "s",
    name: "l",
    password: "slkdmfk",
  };
  await api.post("/api/users").send(newUser).expect(400);
});
