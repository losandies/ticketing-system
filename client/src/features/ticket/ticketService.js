import axios from 'axios';

const API_URL = '/api/projects/project';

const getSingleTicket = async (projectId, ticketId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	console.log('You hit the API');
	const res = await axios.get(
		`${API_URL}${projectId}/ticket/${ticketId}`,
		config
	);
	console.log(res.data);

	return res.data;
};

const createTicket = async (ticketData, projectId, token) => {
	console.log('ticket created');
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.post(
		`${API_URL}/${projectId}/tickets/create-ticket`,
		ticketData,
		config
	);

	console.log(res.data);
	console.log('ticket created');

	return res.data;
};

const claimTicket = async (ticketId, projectId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.get(
		`${API_URL}/${projectId}/tickets/claim-ticket/${ticketId}`,
		config
	);

	console.log(res.data);

	return res.data;
};

const deleteTicket = async (ticketId, projectId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = axios.delete(
		`${API_URL}/${projectId}/tickets/delete-ticket/${ticketId}`,
		config
	);

	console.log(res.data);

	return (await res).data;
};

const ticketService = {
	getSingleTicket,
	createTicket,
	claimTicket,
	deleteTicket,
};

export default ticketService;
