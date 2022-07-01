import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getProjects,
	getSingleProject,
	deleteProject,
	reset,
} from '../../features/project/projectSlice';

import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';

import { MdDelete } from 'react-icons/md';

const ProjectList = () => {
	const { projects, isLoading, isSuccess } = useSelector(
		(state) => state.project
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// useEffect(() => {
	// 	return () => {
	// 		if (isSuccess) {
	// 			dispatch(reset());
	// 		}
	// 	};
	// }, []);

	const getProjectsOnLoad = () => {
		dispatch(getProjects());

		setTimeout(() => {
			dispatch(reset());
		}, 1000);
	};

	const getProject = async (project) => {
		await dispatch(getSingleProject(project._id));
		await navigate(`/project/${project._id}`);
	};

	const initDeleteProject = async (project) => {
		await dispatch(deleteProject(project._id));
		await getProjectsOnLoad();
	};

	useEffect(() => {
		getProjectsOnLoad();
	}, []);

	if (isLoading) return <Spinner />;

	return (
		<div className="max-h-[100%] w-[100%]">
			<table className="shadow-lg bg-white w-full">
				<thead className=" bg-gray-100">
					<tr>
						<th className="border-b-2 border-top-2 text-left px-8 py-4">
							<p className="text-lg font-normal text-gray-400">PROJECT</p>
						</th>
						<th className="border-b-2 border-top-2 text-left px-8 py-4">
							<p className="text-lg font-normal text-gray-400">DESCRIPTION</p>
						</th>
						<th className="border-b-2 border-top-2 text-left px-8 py-4">
							<p className="text-lg font-normal text-gray-400">DEADLINE</p>
						</th>
						<th className="border-b-2 border-top-2 text-left px-8 py-4">
							<p className="text-lg font-normal text-gray-400"></p>
						</th>
					</tr>
				</thead>
				<tbody className="w-screen overflow-y-scroll">
					{projects.map((project) => (
						<tr
							className="hover:bg-gray-100 hover:cursor-pointer active:bg-gray-300"
							key={project._id}
						>
							<td
								className=" px-8 border-b-2 py-4"
								onClick={() => getProject(project)}
							>
								{project.name}
							</td>
							<td
								className=" px-8 border-b-2 py-4"
								onClick={() => getProject(project)}
							>
								{project.description}
							</td>
							<td
								className=" px-8 border-b-2 py-4"
								onClick={() => getProject(project)}
							>
								{project.deadline}
							</td>
							<td className=" px-8 border-b-2 py-4">
								<MdDelete
									className="text-3xl hover:text-red-500"
									onClick={() => initDeleteProject(project)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default ProjectList;
