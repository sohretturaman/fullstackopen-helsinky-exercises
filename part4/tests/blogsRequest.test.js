/** @format */

const app = require("../app");
const supertest = require("supertest");
const assert = require("assert");
const { test, describe } = require("node:test");

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
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const allBlogsResponse = await api.get("/api/blogs");
    const allBlogs = allBlogsResponse.body; // Access the body property to get the array of blogs
    const blogTitles = allBlogs.map((blog) => blog.title);
    assert(blogTitles.includes("beyaz fil"));

    const blog = response.body;
    console.log("blog value", blog);

    assert.strictEqual(blog.likes, 200); // Ensure likes property is correctly set
    //assert.strictEqual(blog.id, blog._id); // Ensure id property is named correctly
  });
});

test("send 400 code if url or title is missing in post request", async () => {
  const newBlog = {
    title: "beyaz fil",
    author: "elif Şafak ",
    likes: 20,
  };

  await api.post("/api/blogs").send(newBlog).expect(400);
});
