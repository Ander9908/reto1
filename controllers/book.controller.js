const {Book} = require('../models');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener libros' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear libro' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar libro' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar libro' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    // Buscar el libro en la base de datos por su ID
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener libro' });
  }
};
