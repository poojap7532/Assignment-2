const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
});

module.exports = mongoose.model('Booking', BookingSchema);
