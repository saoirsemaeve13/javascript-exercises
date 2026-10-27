const getTheTitles = function (array) {
  const books = [];
  array.forEach((element) => {
    books.push(element.title);
  });
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
