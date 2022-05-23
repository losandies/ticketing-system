import axios from 'axios';

const API_URL = '/api/projects';

const getProjects = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	console.log('You hit the API');
	const res = await axios.get(API_URL, config);

	return res.data;
};

const projectService = {
	getProjects,
};

export default projectService;
