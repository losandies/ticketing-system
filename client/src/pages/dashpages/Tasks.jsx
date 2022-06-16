import React from 'react';
import { useSelector } from 'react-redux';
import TicketCard from '../../components/TicketCard';

const Tasks = () => {
	const { user } = useSelector((state) => state.auth);
	return (
		<div className="home flex flex-col w-full h-screen">
			<div className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
				<div className="header-title w-full text-3xl ml-10 relative bottom-2 ">
					<h1>My Tasks</h1>
				</div>
				<div className="buttons flex items-center justify-end mb-10">
					<button className="btn mr-6">Create</button>
					<button className="btn mr-6">Share</button>
				</div>
			</div>

			<div className="mt-10">
				{user.assignedTickets.map((ticket) => (
					<TicketCard ticket={ticket} key={ticket._id} />
				))}
			</div>
		</div>
	);
};

export default Tasks;
