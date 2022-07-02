import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserTickets } from '../features/ticket/ticketSlice';

import Spinner from '../components/Spinner';
import TicketCard from '../components/TicketCard';
import Sidebar from '../components/Sidebar';

const Tasks = () => {
	const { userTickets, isLoading } = useSelector((state) => state.ticket);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserTickets());
	}, []);

	if (isLoading) return <Spinner />;

	return (
		<div className="flex">
			<Sidebar />
			<div className="home flex flex-col w-full h-screen bg-white border-2 border-gray-300">
				<div className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
					<div className="header-title w-full text-3xl ml-10 relative bottom-2 ">
						<h1>My Tasks</h1>
					</div>
				</div>

				<div className="mt-10">
					{userTickets
						.filter((ticket) => ticket.status !== 'Completed')
						.map((ticket) => (
							<TicketCard ticket={ticket} key={ticket._id} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Tasks;
