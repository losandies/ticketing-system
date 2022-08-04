import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Sidebar from '../components/Sidebar';
import TicketLists from '../components/TicketLists';
import { useMediaQuery } from 'react-responsive';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';

const Project = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
	const { project } = useSelector((state) => state.project);

	return isMobile ? (
		<>
			<TopNav />
			<div
				className={`flex flex-col w-full h-full ${
					project.tickets.length >= 1 ? 'overflow-hidden' : null
				}`}
			>
				<div className="home flex flex-col w-full h-full bg-white">
					<header className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
						<div className="header-title w-full text-3xl ml-6 relative bottom-2 ">
							<h1>{project.name}</h1>
						</div>
						<div className="buttons flex items-center justify-end mb-10">
							<Link
								to={`/project/${project._id}/create-ticket`}
								className="btn btn-primary text-white mr-6"
							>
								Create Ticket
							</Link>
						</div>
					</header>
					<section className="project-info my-4 border-b-2 border-gray-300">
						<h3 className="ml-6 mt-4">DESCRIPTION: {project.description}</h3>
						<h3 className="ml-6 mt-4 mb-8">
							PROJECT DEADLINE: {project.deadline}
						</h3>
					</section>
					<div className="h-full overflow-y-hidden mb-20">
						{project.tickets.length >= 1 ? (
							<TicketLists />
						) : (
							<div className="w-full flex justify-center ">
								<p className="text-4xl">No tickets for this project yet.</p>
							</div>
						)}
					</div>
				</div>
				<BottomNav />
			</div>
		</>
	) : (
		<div className="flex">
			<Sidebar />
			<div className="home flex flex-col w-full h-screen z-10 bg-white">
				<header className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
					<div className="header-title w-full text-3xl ml-10 relative bottom-2 ">
						<h1>{project.name}</h1>
					</div>
					<div className="buttons flex items-center justify-end mb-10">
						<Link
							to={`/project/${project._id}/create-ticket`}
							className="btn btn-primary text-white mr-6"
						>
							Create Ticket
						</Link>
					</div>
				</header>
				<section className="project-info my-4 border-b-2 border-gray-300">
					<h3 className="ml-10 mt-4">DESCRIPTION: {project.description}</h3>
					<h3 className="ml-10 mt-4 mb-8">
						PROJECT DEADLINE: {project.deadline}
					</h3>
				</section>
				{project.tickets.length >= 1 ? (
					<TicketLists />
				) : (
					<div className="h-full w-full flex justify-center mt-36">
						<p className="text-4xl">No tickets for this project yet.</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Project;
