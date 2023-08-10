const {Reservation, Book} = require('../models');

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user book');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener reservas' });
  }
};

exports.createReservation = async (req, res) => {
  try {
    const { user, book, dateReserved, dateDue } = req.body;

    const newReservation = await Reservation.create({ user, book, dateReserved, dateDue });
    // Actualizar el campo "available" del libro a false
    await Book.findByIdAndUpdate(book, { available: false });
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear reserva' });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedReservation);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar reserva' });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;

    // Buscar la reserva por su ID
    const reservation = await Reservation.findById(reservationId);

    if (!reservation) {
      return res.status(404).json({ error: 'Reserva no encontrada.' });
    }

    // Obtener el ID del libro de la reserva
    const bookId = reservation.book;

    // Eliminar la reserva
    await Reservation.findByIdAndDelete(reservationId);

    // Actualizar el campo "available" del libro a true
    await Book.findByIdAndUpdate(bookId, { available: true });

    res.json({ message: 'Reserva eliminada con éxito.' });
  } catch (error) {
    console.error('Error al eliminar reserva:', error);
    res.status(500).json({ error: 'Hubo un error al eliminar la reserva.' });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const ReservationId = req.params.id;
    // Buscar la reservacion en la base de datos por su ID
    const reservation = await Book.findById(ReservationId);
    if (!reservation) {
      return res.status(404).json({ error: 'Reservacion no encontrado' });
    }
    
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener reservacion' });
  }
};