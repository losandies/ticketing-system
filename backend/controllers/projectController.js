const asyncHandler = require('express-async-handler');

const Project = require('../models/Project');
const User = require('../models/User.js');
const Ticket = require('../models/Ticket');

const createProject = asyncHandler(async (req, res) => {
	const { name, description, deadline } = req.body;

	if (!name || !description || !deadline) {
		res.status(400);

		throw new Error('Please include the required fields');
	}

	const user = await User.findById(req.user._id);

	const project = await Project.create({
		name,
		description,
		deadline,
		createdBy: req.user._id,
	});

	// user.projects.unshift(project);

	// await user.save()

	if (project) {
		res.status(201).json(project);
	} else {
		res.status(400);
		throw new Error('Invalid Project Data');
	}
});

const getProjects = asyncHandler(async (req, res) => {
	const projects = await Project.find()
		.populate('tickets')
		.populate('createdBy', 'name');

	if (projects) {
		res.status(200).json(projects);
	} else {
		res.status(400);
		throw new Error('Could not create project');
	}
});

const getOneProject = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id)
		.populate('tickets')
		.populate('createdBy', 'name');

	if (project) {
		console.log(project.tickets);
		res.status(200).json(project);
	} else {
		return res.status(400).json({ msg: 'No Project Found' });
	}
});

const editProject = (req, res) => {
	const { name, description, deadline } = req.body;

	const newData = {
		name: name || null,
		description: description || null,
		deadline: deadline || null,
	};

	Project.findByIdAndUpdate(
		req.params.id,
		{ $set: newData },
		{ upsert: true, new: true },
		(err, proj) => {
			if (err) {
				console.error(err);
			} else {
				res.status(200).json(proj);
			}
		}
	);
};

const deleteProject = asyncHandler(async (req, res) => {
	try {
		await Ticket.deleteMany({ project: req.params.id });
		await Project.findByIdAndDelete(req.params.id);
		res.status(200).json({ msg: 'Project Deleted' });
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = {
	createProject,
	getProjects,
	getOneProject,
	editProject,
	deleteProject,
};
