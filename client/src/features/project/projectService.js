import axios from 'axios';

const API_URL = '/api/projects';

const getProjects = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.get(API_URL, config);

	return res.data;
};

const getSingleProject = async (projectId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	console.log('You hit the API');
	const res = await axios.get(API_URL + '/project/' + projectId, config);
	console.log(res.data);

	return await res.data;
};

const createProject = async (projectData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.post(
		API_URL + '/create-project',
		projectData,
		config
	);

	console.log(res.data);

	return res.data;
};

const deleteProject = async (projectId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const res = await axios.delete(`${API_URL}/project/${projectId}`, config);

	console.log(res.data);

	return res.data;
};
const projectService = {
	getProjects,
	getSingleProject,
	createProject,
	deleteProject,
};

export default projectService;
