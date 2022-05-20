const asyncHandler = require('express-async-handler');

const Project = require('../models/Project');
const User = require('../models/User.js');
const Ticket = require('../models/Ticket');

const getTickets = asyncHandler(async (req, res) => {
	const tickets = await Ticket.find({ project: req.params.projectId });

	res.status(200).json(tickets);
});

const createTicket = asyncHandler(async (req, res) => {
	const { name, description, deadline } = req.body;

	if (!name || !description || !deadline) {
		res.status(400);

		throw new Error('Please include the required fields');
	}

	const project = await Project.findById(req.params.projectId);
	const user = await User.findById(req.user._id);

	const ticket = await Ticket.create({
		name,
		description,
		deadline,
		user: req.user._id,
		project: req.params.projectId,
	});

	project.tickets.unshift(ticket);
	user.createdTickets.unshift(ticket);

	await project.save();
	await user.save();

	if (ticket) {
		res.status(201).json(ticket);
	} else {
		res.status(400);

		throw new Error(
			'Ticket Could not  be created. Please check required fields.'
		);
	}
});

module.exports = {
	createTicket,
	getTickets,
};
