const {
  addBookHandler,
  getBooksHandler,
  getDetailBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBook,
  },
];

module.exports = routes;
