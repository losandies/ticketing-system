const express = require('express');
const router = express.Router({ mergeParams: true });
const {
	createTicket,
	getTickets,
	claimTicket,
	deleteTicket,
	completeTicket,
	reopenTicket,
} = require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');

router.post('/create-ticket', protect, createTicket);

router.get('/', protect, getTickets);

router.get('/claim-ticket/:ticketId', protect, claimTicket);

router.get('/complete-ticket/:ticketId', protect, completeTicket);

router.get('/reopen-ticket/:ticketId', protect, reopenTicket);

router.delete('/delete-ticket/:ticketId', protect, deleteTicket);

module.exports = router;
