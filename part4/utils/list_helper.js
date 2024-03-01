/** @format */

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (array) => {
  let sum = 0;
  const result = array.forEach((num) => {
    sum += num;
  });
  return array.length === 0 ? 0 : result;
};

module.exports = {
  totalLikes,
  dummy,
};
