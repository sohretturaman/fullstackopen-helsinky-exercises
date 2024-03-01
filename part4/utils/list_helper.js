/** @format */

// list_helper.js

const dummy = (blogs) => {
  return 1;
};
const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => total + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  let maxLikes = 0;
  let favorite = null;

  blogs.forEach((blog) => {
    if (blog.likes > maxLikes) {
      maxLikes = blog.likes;
      favorite = blog;
    }
  });

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes,
  };
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  const blogCounts = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + 1;
    return acc;
  }, {});

  const authorWithMostBlogs = Object.keys(blogCounts).reduce((a, b) => {
    return blogCounts[a] > blogCounts[b] ? a : b;
  });

  return {
    author: authorWithMostBlogs,
    blogs: blogCounts[authorWithMostBlogs],
  };
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  const likesByAuthor = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + blog.likes;
    return acc;
  }, {});

  const authorWithMostLikes = Object.keys(likesByAuthor).reduce((a, b) => {
    return likesByAuthor[a] > likesByAuthor[b] ? a : b;
  });

  return {
    author: authorWithMostLikes,
    likes: likesByAuthor[authorWithMostLikes],
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
