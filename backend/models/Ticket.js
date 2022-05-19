const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ['New', 'In Progress', 'Completed'],
			default: 'new',
		},
		deadline: {
			type: Date,
			required: true,
		},
		project: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project',
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		assignedTo: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model(ticketSchema, 'Ticket');
