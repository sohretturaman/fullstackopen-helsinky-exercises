/** @format */

const app = require("../app");
const supertest = require("supertest");
const { test, describe } = require("node:test");

const api = supertest(app);

test("api returns 200", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});
