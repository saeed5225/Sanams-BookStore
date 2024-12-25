import Book from "../Models/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({ book: book, ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, Error: error });
  }
};

export const addBook = async (req, res) => {
  try {
    const book = req.body;
    const newBook = Book(book);
    await newBook.save();
    res.status(201).json({ message: "Book Added Succesfully", book: newBook });
  } catch (error) {
    res.status(500).json(error);
  }
};
