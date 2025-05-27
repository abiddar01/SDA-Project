const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  company: { type: String },
  job: { type: String },
  currentVehicle: { type: String },
  variant: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
