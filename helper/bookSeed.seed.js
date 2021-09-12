'use strict';


const bookModel = require('../models/book.model');

const beastBook = () => {

 
  const firstBook = new bookModel({
    title: "The Republic" ,
    description:" Not only is it an important piece of work from one of the most influential philosophers, it’s also very readable. “Plato did not write philosophy like a dry textbook – he wrote it like a living conversation" ,
    status:"available",
    email: "fllowerviolet@hotmail.com"
  });


  firstBook.save();

  const secondBook = new bookModel({
    title: "The Complete Works" ,
    description:"he plays were first published between 1594 and 1634 Why you should read it: Elizabethan poet Ben Jonson said that Shakespeare was “not of an age but for all time”. He wasn’t wrong. Centuries later, Shakespeare’s plays are still by far the most studied and performed in the English-speaking world and beyond." ,
    status:"available",
    email: "flloweryellow@hotmail.com"
  });

  secondBook.save();
  const thirdBook = new bookModel({
    title: "The Wealth of Nations" ,
    description:"Why you should read it: Smith’s book has been described as “the foundation of economics, the origin of econometrics and the intellectual cradle of capitalism”, all of which are as relevant today as they were when he wrote it." ,
    status:"not available",
    email: "sarrdamma@hotmail.com"
  });

  thirdBook.save();

  console.log("Data seeded! 👍");
}

module.exports = beastBook;