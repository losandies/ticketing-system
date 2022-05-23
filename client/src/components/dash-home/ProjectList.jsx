import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects, reset } from '../../features/project/projectSlice';

import Spinner from '../../components/Spinner';

const ProjectList = () => {
	const { projects, isLoading, isSuccess } = useSelector(
		(state) => state.project
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProjects());
		console.log(projects[18].createdBy.name);
	}, []);

	if (isLoading) return <Spinner />;

	return (
		<div className="absolute w-full h-full overflow-x-auto">
			<table className="shadow-lg bg-white w-full overflow-auto table-fixed">
				<thead className="sticky top-0 z-10 bg-gray-100">
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
				<tbody className="overflow-y-scroll">
					{projects.map((project) => (
						<tr>
							<td key={project._id} className=" px-8 border-b-2 py-4">
								{project.name}
							</td>
							<td key={project._id} className=" px-8 border-b-2 py-4">
								{project.description}
							</td>
							<td key={project._id} className=" px-8 border-b-2 py-4">
								{project.deadline}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default ProjectList;
