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

describe("post request", async () => {
  test("valid blog is can be added 200", async () => {
    const newBlog = {
      title: "beyaz fil",
      author: "Elif Şafak",
      url: "http://localhost:?",
      likes: 200,
    };
    await app
      .post("/api/blogs")
      .send(newBlog)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const blogs = await app.get("api/blogs");

    const contents = blogs.body.map((blog) => blog.title);
    assert.deepEqual(contents, [
      "beyaz fil",
      //change content for pass to test
    ]);
  });
});
