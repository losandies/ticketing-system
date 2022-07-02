import React from 'react';
import { useSelector } from 'react-redux';
import TicketCard from '../TicketCard';

const TicketLists = () => {
	const { project } = useSelector((state) => state.project);

	return (
		<section className="tickets h-screen">
			<div className="ticket-container h-full w-full  p-2 flex justify-evenly flex-wrap">
				<div className="bg-gray-200 w-80 h-[22rem] flex flex-col rounded-xl my-4">
					<div className="list-title ml-4 h-6 mb-6 mt-2 ">
						<p className="text-2xl">Urgent</p>
					</div>
					<div className="overflow-y-scroll">
						{project.tickets
							.filter(
								(ticket) =>
									ticket.severity === 'urgent' && ticket.status !== 'Completed'
							)
							.map((ticket) => (
								<TicketCard ticket={ticket} key={ticket._id} />
							))}
					</div>
				</div>
				<div className="bg-gray-200 w-80 h-[22rem] flex flex-col rounded-xl my-4">
					<div className="list-title ml-4 h-6 mb-6 mt-2 ">
						<p className="text-2xl">Normal</p>
					</div>
					<div className="overflow-y-scroll">
						{project.tickets
							.filter(
								(ticket) =>
									ticket.severity === 'normal' && ticket.status !== 'Completed'
							)
							.map((ticket) => (
								<TicketCard ticket={ticket} key={ticket._id} />
							))}
					</div>
				</div>

				<div className="bg-gray-200 w-80 h-[22rem] flex flex-col rounded-xl my-4">
					<div className="list-title ml-4 h-6 mb-6 mt-2 ">
						<p className="text-2xl">Trivial</p>
					</div>
					<div className="overflow-y-scroll">
						{project.tickets
							.filter(
								(ticket) =>
									ticket.severity === 'trivial' && ticket.status !== 'Completed'
							)
							.map((ticket) => (
								<TicketCard ticket={ticket} key={ticket._id} />
							))}
					</div>
				</div>
				<div className="bg-gray-200 w-80 h-[22rem] flex flex-col rounded-xl my-4">
					<div className="list-title ml-4 h-6 my-6 ">
						<p className="text-2xl">Completed</p>
					</div>
					<div className="overflow-y-scroll">
						{project.tickets
							.filter((ticket) => ticket.status === 'Completed')
							.map((ticket) => (
								<TicketCard ticket={ticket} key={ticket._id} />
							))}
					</div>
				</div>
				<div className="w-80"></div>
				<div className="w-80"></div>
			</div>
		</section>
	);
};

export default TicketLists;
