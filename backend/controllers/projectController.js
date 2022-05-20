const asyncHandler = require('express-async-handler');

const Project = require('../models/Project');
const User = require('../models/User.js');

const createProject = asyncHandler(async (req, res) => {
	const { name, description, deadline } = req.body;

	if (!name || !description || !deadline) {
		res.status(400);

		throw new Error('Please include the required fields');
	}

	const user = await User.findById(req.user._id);
	console.log(req.user);

	const project = await Project.create({
		name,
		description,
		deadline,
		user: req.user._id,
	});

	console.log(req.user);

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
	const projects = await Project.find().populate('tickets');

	if (projects) {
		res.status(200).json(projects);
	} else {
		return res.status(400).json({ msg: 'No Projects Found' });
	}
});

const getOneProject = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id);

	if (project) {
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
module.exports = {
	createProject,
	getProjects,
	getOneProject,
	editProject,
};
