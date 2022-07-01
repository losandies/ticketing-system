const asyncHandler = require('express-async-handler');

const Project = require('../models/Project');
const User = require('../models/User.js');
const Ticket = require('../models/Ticket');
const { findById } = require('../models/Ticket');

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

	console.log(req.user);

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

const claimTicket = asyncHandler(async (req, res) => {
	console.log(req.headers);
	const user = await User.findById(req.user._id);
	const ticket = await Ticket.findById(req.params.ticketId);

	console.log(ticket);

	Ticket.findByIdAndUpdate(
		req.params.ticketId,
		{ $set: { status: 'In progress' } },
		{ upsert: true, new: true },
		(err) => {
			if (err) {
				console.error(err);
			}
		}
	);

	if (ticket) {
		res.status(200).json({ msg: 'Ticket claimed' });
	} else {
		res.status(400);

		throw new Error('Ticket could not be found.');
	}

	user.assignedTickets.unshift(ticket);
	await user.save();
});

const completeTicket = asyncHandler(async (req, res) => {
	const ticket = await Ticket.findById(req.params.ticketId);

	console.log(ticket);

	Ticket.findByIdAndUpdate(
		req.params.ticketId,
		{ $set: { status: 'Completed' } },
		{ upsert: true, new: true },
		(err) => {
			if (err) {
				console.error(err);
			}
		}
	);

	if (ticket) {
		res.status(200).json({ msg: 'Ticket claimed' });
	} else {
		res.status(400);

		throw new Error('Ticket could not be found.');
	}
});

const reopenTicket = asyncHandler(async (req, res) => {
	const ticket = await Ticket.findById(req.params.ticketId);

	console.log(ticket);

	Ticket.findByIdAndUpdate(
		req.params.ticketId,
		{ $set: { status: 'New' } },
		{ upsert: true, new: true },
		(err) => {
			if (err) {
				console.error(err);
			}
		}
	);

	if (ticket) {
		res.status(200).json({ msg: 'Ticket reopened' });
	} else {
		res.status(400);

		throw new Error('Ticket could not be found.');
	}
});

const deleteTicket = asyncHandler(async (req, res) => {
	console.log(req.params);
	try {
		await Ticket.findByIdAndDelete(req.params.ticketId);
		res.status(200).json({ msg: 'Ticket Deleted' });
	} catch (error) {
		throw new Error(error);
	}
});

module.exports = {
	createTicket,
	getTickets,
	claimTicket,
	deleteTicket,
	completeTicket,
	reopenTicket,
};
