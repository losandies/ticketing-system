const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// Create a user
// /api/users
// public req
router.post(
	'/',
	asyncHandler(async (req, res) => {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			res.status(400);

			throw new Error('Please include the required fields');
		}

		const userExists = await User.findOne({ email });

		if (userExists) {
			res.status(400);

			throw new Error('User already exists');
		}

		const salt = await bcrypt.genSalt(10);

		const hashedPassword = await bcrypt.hash(password, salt);

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		});

		// if (user) {
		// 	res.status(201).json({
		// 		id: user._id,
		// 		name: user.name,
		// 		email: user.email,
		// 		token: generateToken(user._id),
		// 	});
		// } else {
		// 	res.status(400);
		// 	throw new Error('Invalid user data');
		// }

		console.log({
			id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	})
);

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});
};

module.exports = router;
