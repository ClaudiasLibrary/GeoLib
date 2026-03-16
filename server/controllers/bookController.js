const Book = require("../models/Book");

// GET /books
async function getBooks(req, res, next) {
  try {
    const books = await Book.getAll();
    res.json(books);
  } catch (err) { next(err); }
}

// GET /books/:id
async function getBookById(req, res, next) {
  try {
    const book = await Book.getById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) { next(err); }
}

// POST /books
async function addBook(req, res, next) {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) { next(err); }
}

module.exports = { getBooks, getBookById, addBook };