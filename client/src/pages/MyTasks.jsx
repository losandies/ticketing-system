import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserTickets } from '../features/ticket/ticketSlice';

import Spinner from '../components/Spinner';
import TicketCard from '../components/TicketCard';
import Sidebar from '../components/Sidebar';
import { useMediaQuery } from 'react-responsive';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';

const Tasks = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

	const { userTickets, isLoading } = useSelector((state) => state.ticket);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserTickets());
	}, []);

	if (isLoading && !isMobile) return <Spinner />;

	return (
		<div className="flex flex-col md:flex-row">
			{isMobile ? <TopNav /> : <Sidebar />}
			<div className="home flex flex-col w-full h-full md:h-screen bg-white md:border-l-2 border-gray-300">
				<div className="header flex flex-row w-full h-12 md:h-16 border-b-[1px] md:border-b-2 mt-10 border-gray-100 md:border-gray-300">
					<div className="header-title w-full text-2xl md:text-3xl ml-6 md:ml-8 relative bottom-4 ">
						<h1>My Tasks</h1>
					</div>
				</div>

				{userTickets.length >= 1 ? (
					<div className="mt-6 md:mt-10">
						{userTickets
							.filter((ticket) => ticket.status !== 'Completed')
							.map((ticket) => (
								<TicketCard ticket={ticket} key={ticket._id} />
							))}
					</div>
				) : (
					<div className="h-screen w-full flex justify-center mt-36">
						<p className="text-4xl">No tasks yet.</p>
					</div>
				)}
			</div>
			{isMobile ? <BottomNav /> : null}
		</div>
	);
};

export default Tasks;
