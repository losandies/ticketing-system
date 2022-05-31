import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getProjects,
	getSingleProject,
	reset,
} from '../../features/project/projectSlice';

import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';

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

	useEffect(() => {
		dispatch(getProjects());

		setTimeout(() => {
			dispatch(reset());
		}, 1000);
	}, []);

	const getProject = async (project) => {
		await dispatch(getSingleProject(project._id));

		await navigate(`/project/${project._id}`);
	};

	if (isLoading) return <Spinner />;

	return (
		<div className="max-h-[400px]">
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
					</tr>
				</thead>
				<tbody className="w-screen overflow-y-scroll">
					{projects.map((project) => (
						<tr
							className="hover:bg-gray-100 hover:cursor-pointer active:bg-gray-300"
							key={project._id}
							onClick={() => getProject(project)}
						>
							<td className=" px-8 border-b-2 py-4">{project.name}</td>
							<td className=" px-8 border-b-2 py-4">{project.description}</td>
							<td className=" px-8 border-b-2 py-4">{project.deadline}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default ProjectList;
