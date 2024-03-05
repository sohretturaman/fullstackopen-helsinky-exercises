/** @format */

const app = require("../app");
const supertest = require("supertest");
const assert = require("assert");

const api = supertest(app);

test("api returns 200", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

describe("post request", async () => {
  test("valid blog can be added and id is named correctly", async () => {
    const newBlog = {
      title: "beyaz fil",
      author: "Elif Şafak",
      url: "http://localhost:?",
      likes: 200,
    };
    const response = await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const blog = response.body;
    assert.strictEqual(blog.id, blog._id); // the id is named correctly
    assert.strictEqual(blog.likes, 0); // is like 0
    assert.ok(blog.hasOwnProperty("likes")); // like porperty is exist or not in blog object

    const blogs = await api.get("/api/blogs");

    const contents = blogs.body.map((blog) => blog.title);
    assert.deepEqual(contents, [
      "beyaz fil",
      // Add other expected titles here if necessary
    ]);
  });
});

test("send 400 code if url or title is missing in post request", async (res, req) => {
  const newBlog = {
    author: "elif Şafak ",
    likes: 20,
  };

  await api.post("/api/blogs").send(newBlog).expect(400);
});
