const Book = require("../models/Book");

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Find all books
    if (books.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data: books,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found",
      });
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single book by ID
const getSingleBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); // Find book by ID
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add a new book
const addNewBook = async (req, res) => {
  try {
    const { title, author, year } = req.body; // Extract data from request body
    const newBook = new Book({
      title,
      author,
      year,
    });
    const savedBook = await newBook.save();
    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: savedBook,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a book by ID
const updateSingleBookById = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateSingleBookById,
  deleteBook,
};
