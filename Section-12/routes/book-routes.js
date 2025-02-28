const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateSingleBookById,
  deleteBook,
} = require("../controllers/book-controller");

const router = express.Router();

// GET all books
router.get("/getAllBooks", getAllBooks);

// GET a single book by ID
router.get("/getBookById/:id", getSingleBookById);

// POST a new book
router.post("/add", addNewBook);

// PUT update a book by ID
router.put("/update/:id", updateSingleBookById);

// DELETE a book by ID
router.delete("/delete/:id", deleteBook);

module.exports = router;
