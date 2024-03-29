const {
  addBookHandler,
  getBooksHandler,
  getDetailBook,
  editDetailBook,
  deleteBook,
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
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editDetailBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

module.exports = routes;
