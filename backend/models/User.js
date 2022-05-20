const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		projects: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Project',
			},
		],
		createdTickets: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Ticket',
			},
		],
		assignedTickets: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Ticket',
			},
		],
	},

	{
		timstamps: true,
	}
);

module.exports = mongoose.model('User', userSchema);
