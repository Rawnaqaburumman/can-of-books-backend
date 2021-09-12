'use strict';

const bookModel = require('../models/book.model');


const getBooks = (request, response) => {

  bookModel.find((error, bookData) => {
    response.json(bookData)
  });

};


module.exports = {
    getBooks 
}