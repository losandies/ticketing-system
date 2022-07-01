const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

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
		name: capitalizedName,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}

	console.log({
		_id: user._id,
		name: user.name,
		email: user.email,
	});
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).populate(
		'createdTickets assignedTickets'
	);

	if (user) {
		const match = await bcrypt.compare(password, user.password);

		if (match) {
			res.status(200).json({
				_id: user._id,
				name: user.name,
				email: user.email,
				assignedTickets: user.assignedTickets,
				createdTickets: user.createdTickets,
				token: generateToken(user._id),
			});
		}
	} else {
		res.status(401);
		throw new Error('Invalid Credentials');
	}
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});
};

const getUserTickets = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id).populate('assignedTickets');

	console.log(user.assignedTickets);
	const assignedTickets = user.assignedTickets;

	if (user && assignedTickets) {
		res.status(200).json(assignedTickets);
	} else {
		res.status(400);

		throw new Error('No tickets found');
	}
});

module.exports = {
	registerUser,
	loginUser,
	getUserTickets,
};
