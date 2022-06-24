const express = require('express');
const router = express.Router();
const {
	registerUser,
	loginUser,
	getUserTickets,
} = require('../controllers/userController.js');

const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);

router.get('/user-tickets', protect, getUserTickets);

module.exports = router;
