const express = require('express');
const router = express.Router();
const {UserCotroller} = require('../controllers');

// Ruta para obtener todos los usuarios
router.get('/', UserCotroller.getAllUsers);

// Ruta para crear un nuevo usuario
router.post('/', UserCotroller.createUser);

// Ruta para obtener detalles de un usuario especifico
router.get('/:id', UserCotroller.getUserById);

// Ruta para actualizar un usuario especifico
router.put('/:id', UserCotroller.updateUser);

// Ruta para eliminar un usuario especifico
router.delete('/:id', UserCotroller.deleteUser);

module.exports = router;
