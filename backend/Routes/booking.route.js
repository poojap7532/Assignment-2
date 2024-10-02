const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// Create a booking
router.post('/', async (req, res) => {
    const booking = new Booking(req.body);
    try {
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get bookings for a user
router.get('/user/:userId', async (req, res) => {
    const bookings = await Booking.find({ user: req.params.userId }).populate('property');
    res.json(bookings);
});

module.exports = router;
