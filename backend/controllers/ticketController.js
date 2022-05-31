const asyncHandler = require('express-async-handler');

const Project = require('../models/Project');
const User = require('../models/User.js');
const Ticket = require('../models/Ticket');

//
//GET SINGLE TICKET

const getTickets = asyncHandler(async (req, res) => {
	const tickets = await Ticket.find({ project: req.params.projectId }).populate(
		'createdBy',
		'name'
	);

	res.status(200).json(tickets);
});

const createTicket = asyncHandler(async (req, res) => {
	const { name, description, deadline, severity } = req.body;

	if (!description || !deadline) {
		res.status(400);

		throw new Error('Please include the required fields');
	}

	const ticket = await Ticket.create({
		description,
		deadline,
		createdBy: req.user._id,
		project: req.params.id,
		severity,
	});

	if (ticket) {
		res.status(201).json(ticket);
	} else {
		res.status(400);

		throw new Error(
			'Ticket Could not  be created. Please check required fields.'
		);
	}
	// Populating necessary fields with the created tickets

	const project = await Project.findById(req.params.id);
	const user = await User.findById(req.user._id);

	project.tickets.unshift(ticket);
	user.createdTickets.unshift(ticket);

	await project.save();
	await user.save();
});

module.exports = {
	createTicket,
	getTickets,
};
