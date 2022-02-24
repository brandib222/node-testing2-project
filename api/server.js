const express = require('express');

const booksRouter = require('./books/books-router.js');

const server = express();

server.use(express.json());

server.use('/api/books', booksRouter);

module.exports = server;