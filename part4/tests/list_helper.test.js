/** @format */

// list_helper.test.js

const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

test("dummy returns one", () => {
  const blogs = [];
  const result = listHelper.dummy(blogs);
  assert.strictEqual(result, 1);
});

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0,
    },
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });
});

describe("favorite blog", () => {
  const blogs = [
    {
      title: "Blog 1",
      author: "Author 1",
      likes: 10,
    },
    {
      title: "Blog 2",
      author: "Author 2",
      likes: 20,
    },
    {
      title: "Blog 3",
      author: "Author 3",
      likes: 15,
    },
  ];

  test("returns the blog with the most likes", () => {
    const result = listHelper.favoriteBlog(blogs);
    assert.deepStrictEqual(result, {
      title: "Blog 2",
      author: "Author 2",
      likes: 20,
    });
  });
});

describe("most blogs", () => {
  const blogs = [
    { author: "Author 1" },
    { author: "Author 2" },
    { author: "Author 2" },
    { author: "Author 3" },
    { author: "Author 3" },
    { author: "Author 3" },
  ];

  test("returns the author with the most blogs", () => {
    const result = listHelper.mostBlogs(blogs);
    assert.deepStrictEqual(result, { author: "Author 3", blogs: 3 });
  });
});

describe("most likes", () => {
  const blogs = [
    { author: "Author 1", likes: 10 },
    { author: "Author 2", likes: 20 },
    { author: "Author 2", likes: 15 },
    { author: "Author 3", likes: 25 },
    { author: "Author 3", likes: 30 },
  ];

  test("returns the author with the most likes", () => {
    const result = listHelper.mostLikes(blogs);
    assert.deepStrictEqual(result, { author: "Author 3", likes: 55 });
  });
});
