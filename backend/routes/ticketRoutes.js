const express = require('express');
const router = express.Router({ mergeParams: true });
const { createTicket, getTickets } = require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');

router.post('/create-ticket', protect, createTicket);

router.get('/', protect, getTickets);

module.exports = router;
