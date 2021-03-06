"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_URL);

const { getBooks,createBook,deleteBook,updateBook } = require("./controller/book.controller");

const beastBook = require("./helper/bookSeed.seed");


// beastBook();


   //beastBook();

  //  beastBook();



app.get("/book", getBooks);
app.post("/book",createBook);
app.delete("/book/:book_id",deleteBook);
app.put("/book/:book_id",updateBook);
app.get("/", (request, response) => {
  response.send("test request received");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
