import React, { useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TicketLists from '../../components/dash-project/TicketLists';

const Project = () => {
	const { project } = useSelector((state) => state.project);

	const navigate = useNavigate();

	return (
		<div className="flex overflow-y-hidden">
			<Sidebar />
			<div className="home flex flex-col w-full h-screen z-10">
				<header className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
					<div className="header-title w-full text-3xl ml-10 relative bottom-2 ">
						<h1>{project.name}</h1>
					</div>
					<div className="buttons flex items-center justify-end mb-10">
						<button
							className="btn mr-6 w-40"
							onClick={() => navigate(`/project/${project._id}/create-ticket`)}
						>
							Create Ticket
						</button>
					</div>
				</header>
				<section className="project-info my-4 border-b-2 border-gray-300">
					<h3 className="ml-10 mt-4">DESCRIPTION: {project.description}</h3>
					<h3 className="ml-10 mt-4 mb-8">
						PROJECT DEADLINE: {project.deadline}
					</h3>
				</section>
				<TicketLists />
			</div>
		</div>
	);
};

export default Project;
