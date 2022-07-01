import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TicketCard from '../../components/TicketCard';

import { getUserTickets } from '../../features/ticket/ticketSlice';
import Spinner from '../../components/Spinner';
import axios from 'axios';

const Tasks = () => {
	const { user } = useSelector((state) => state.auth);
	const { userTickets, isLoading } = useSelector((state) => state.ticket);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserTickets());
	}, []);

	if (isLoading) return <Spinner />;

	return (
		<div className="home flex flex-col w-full h-screen bg-white">
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
	);
};

export default Tasks;
