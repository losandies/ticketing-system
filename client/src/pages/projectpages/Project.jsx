import React, { useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import TicketCard from '../../components/TicketCard';

const Project = () => {
	const { project } = useSelector((state) => state.project);

	console.log(project);
	return (
		<div className="flex overflow-y-hidden">
			<Sidebar />
			<div className="home flex flex-col w-full h-screen z-10">
				<div className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
					<div className="header-title w-full text-3xl ml-10 relative bottom-2 ">
						<h1>{project.name}</h1>
					</div>
					<div className="buttons flex items-center justify-end mb-10">
						<Link to={`/project/${project._id}/create-ticket`}>
							<button className="btn mr-6 w-40">Create Ticket</button>
						</Link>
					</div>
				</div>
				<section className="pinned-projects my-4">
					<h3 className="ml-10 mt-4">PINNED PROJECTS</h3>
					<div className="mx-10 my-4 flex justify-between"></div>
				</section>
				<section className="tickets h-full">
					<div className="ticket-container h-full w-full p-10 flex justify-around">
						<div className="bg-gray-200 w-80 h-full flex flex-col rounded-xl ">
							<div className="list-title ml-4 h-12 mt-6 ">
								<p className="text-2xl">Urgent</p>
							</div>
							{project.tickets
								.filter((ticket) => ticket.severity === 'urgent')
								.map((ticket) => (
									<TicketCard ticket={ticket} />
								))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Project;
