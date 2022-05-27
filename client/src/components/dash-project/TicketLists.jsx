import React, { useEffect } from 'react';
import TicketCard from '../TicketCard';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProject } from '../../features/project/projectSlice';

const TicketLists = () => {
	const { project } = useSelector((state) => state.project);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSingleProject(project._id));
	}, []);

	return (
		<section className="tickets h-full">
			<div className="ticket-container h-5/6 w-full  p-10 flex justify-around">
				<div className="bg-gray-200 w-80 h-5/6 flex flex-col rounded-xl ">
					<div className="list-title ml-4 h-12 my-6 ">
						<p className="text-2xl">Urgent</p>
					</div>
					<div className="overflow-y-scroll">
						{project.tickets
							.filter((ticket) => ticket.severity === 'urgent')
							.map((ticket) => (
								<TicketCard ticket={ticket} key={ticket._id} />
							))}
					</div>
				</div>
				<div className="bg-gray-200 w-80 h-5/6 flex flex-col rounded-xl">
					<div className="list-title ml-4 h-12 my-6 ">
						<p className="text-2xl">Normal</p>
					</div>
					<div className="overflow-y-scroll">
						{project.tickets
							.filter((ticket) => ticket.severity === 'normal')
							.map((ticket) => (
								<TicketCard ticket={ticket} key={ticket._id} />
							))}
					</div>
				</div>
				<div className="bg-gray-200 w-80 h-5/6 flex flex-col rounded-xl ">
					<div className="list-title ml-4 h-12 my-6 ">
						<p className="text-2xl">Trivial</p>
					</div>
					<div className="overflow-y-scroll">
						{project.tickets
							.filter((ticket) => ticket.severity === 'trivial')
							.map((ticket) => (
								<TicketCard ticket={ticket} key={ticket._id} />
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TicketLists;
