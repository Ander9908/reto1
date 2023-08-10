const express = require('express');
const router = express.Router();
const {ReservationController} = require('../controllers');

// Ruta para obtener todas las reservaciones
router.get('/', ReservationController.getAllReservations);

// Ruta para crear una nueva reservacion
router.post('/', ReservationController.createReservation);

// Ruta para obtener detalles de una reservacion especifica
router.get('/:id', ReservationController.getReservationById);

// Ruta para actualizar una reservacion especifica
router.put('/:id', ReservationController.deleteReservation);

// Ruta para eliminar unA RESERVACION especifico
router.delete('/:id', ReservationController.deleteReservation);

module.exports = router;
