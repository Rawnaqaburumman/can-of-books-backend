'use strict';

const bookModel = require('../models/book.model');


const getBooks = (request, response) => {

  bookModel.find((error, bookData) => {
    response.json(bookData)
  });

};

const createBook = (request, response) => {
  const {
    title,
    description,
    status,
    email,
  } = request.body;

  const newBook = new bookModel({
    title:title,
    description:description,
    status: status,
    email:email,
  });

  newBook.save();
  response.send(newBook);

};

const deleteBook = (request, response) => {
console.log(request.params);
  const bookId = request.params.book_id;

  bookModel.deleteOne({ _id: bookId }, (error, deletedData) => {
    response.json(deletedData);
  });



};

const updateBook=(request,response )=>{

  const {title,description,status,email}  =request.body
  const bookId = request.params.book_id;
  bookModel.findByIdAndUpdate ({_id:bookId},{title,description,status,email},{new:true},(error,updatedBook )=> { 
    response.json(updatedBook);
  }
  )
  }


module.exports = {
  getBooks, createBook, deleteBook,updateBook
}