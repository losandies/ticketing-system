import axios from 'axios';

const API_URL = '/api/project/';

const getSingleTicket = async (projectId, ticketId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	console.log('You hit the API');
	const res = await axios.get(
		`${API_URL}/project/${projectId}/ticket/${ticketId}`,
		config
	);
	console.log(res.data);

	return res.data;
};

const createTicket = async (ticketData, projectId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.post(
		`${API_URL}/${projectId}/create-ticket`,
		ticketData,
		config
	);

	console.log(res.data);

	return res.data;
};

const ticketService = {
	getSingleTicket,
	createTicket,
};

export default ticketService;
