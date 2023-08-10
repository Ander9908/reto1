const express = require('express');
const router = express.Router();
const {BookController} = require('../controllers');


// Ruta para obtener todos los libros
router.get('/', BookController.getAllBooks);

// Ruta para crear un nuevo libro
router.post('/', BookController.createBook);

// Ruta para obtener detalles de un libro específico
router.get('/:id', BookController.getBookById);

// Ruta para actualizar un libro específico
router.put('/:id', BookController.updateBook);

// Ruta para eliminar un libro específico
router.delete('/:id', BookController.deleteBook);

module.exports = router;
