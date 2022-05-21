const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		description: {
			type: String,
			required: [true, 'What needs to be done?'],
		},
		deadline: {
			type: String,
			required: true,
		},
		tickets: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Ticket',
			},
		],
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Project', projectSchema);
