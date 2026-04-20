import Book from '../models/book.model.js';

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get free books
export const getFreeBooks = async (req, res) => {
  try {
    const freeBooks = await Book.find({ category: 'Free' });
    res.status(200).json(freeBooks);
  } catch (error) {
    console.error('Error fetching free books:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new book (admin functionality)
export const createBook = async (req, res) => {
  try {
    const { name, title, price, category, image } = req.body;
    const newBook = new Book({ name, title, price, category, image });
    await newBook.save();
    res.status(201).json({ message: 'Book created successfully', book: newBook });
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
