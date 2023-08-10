const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  dateReserved: Date,
  dateDue: Date
});

module.exports = mongoose.model('Reservation', reservationSchema);