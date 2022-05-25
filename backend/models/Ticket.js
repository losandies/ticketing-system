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
			enum: ['new', 'in progress', 'completed'],
			required: true,
			default: 'new',
		},
		severity: {
			type: String,
			enum: ['urgent', 'normal', 'trivial'],
			required: true,
		},
		project: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project',
			required: true,
		},
		deadline: {
			type: String,
			required: true,
		},
		createdBy: {
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

module.exports = mongoose.model('Ticket', ticketSchema);
