import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	claimTicket,
	deleteTicket,
	completeTicket,
	reopenTicket,
} from '../features/ticket/ticketSlice';
import { switchCurrentPage } from '../features/navigation/navigationSlice';
import Modal from '../components/Modal';
import { toast } from 'react-toastify';

import { MdDelete } from 'react-icons/md';

const TicketCard = ({ ticket, projectName }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { project } = useSelector((state) => state.project);
	const { currentPage } = useSelector((state) => state.navigation);

	const [isOpen, setIsOpen] = useState(false);

	const ticketData = {
		ticketId: ticket._id,
		projectId: project._id,
	};

	const initiateClaimTicket = () => {
		dispatch(claimTicket(ticketData));
		toast.success('Ticket Claimed!');
		setIsOpen(false);
		navigate('/dashboard');
	};

	const initiateCompleteTicket = () => {
		dispatch(completeTicket(ticketData));
		toast.success('Ticket Completed!');
		setIsOpen(false);
		dispatch(switchCurrentPage('home'));
		navigate('/dashboard');
	};

	const initiateReopenTicket = () => {
		dispatch(reopenTicket(ticketData));
		toast.success('Ticket Reopened!');
		setIsOpen(false);
		dispatch(switchCurrentPage('home'));
		navigate('/dashboard');
	};

	const initiateDeleteTicket = () => {
		dispatch(deleteTicket(ticketData));
		toast.success('Ticket Deleted!');
		setIsOpen(false);
		dispatch(switchCurrentPage('home'));
		navigate('/dashboard');
	};

	return (
		<div className="flex justify-center">
			<div
				className="bg-white w-5/6 h-32 rounded-xl shadow-md mb-5 overflow-scroll scrollbar-hide cursor-pointer hover:shadow-lg"
				onClick={() => setIsOpen(true)}
			>
				<div
					className={`w-full h-10 ${
						ticket.status === 'Completed'
							? 'bg-green-400'
							: ticket.severity === 'urgent'
							? 'bg-red-400'
							: ticket.severity === 'normal'
							? 'bg-sky-300'
							: ticket.severity === 'trivial'
							? 'bg-pink-300'
							: null
					} sticky top-0 z-10 flex`}
				>
					<h2 className="pt-3 pl-2 text-white text-xs">
						Deadline: {ticket.deadline}
					</h2>

					<h2 className="absolute right-2 pt-3 pr-2 text-white text-xs">
						Status: {ticket.status}
					</h2>
				</div>

				<p className="p-4">{ticket.description}</p>
			</div>

			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				<div className="ticket-header flex justify-center items-center w-full h-20 bg-gray-300 rounded-md">
					<p className="text-2xl">Ticket ID - {ticket._id}</p>
				</div>

				<div className="ticket-importance flex mt-6">
					<p className="text-2xl">
						Importance:{' '}
						{ticket.severity.charAt(0).toUpperCase() + ticket.severity.slice(1)}
					</p>
				</div>
				<div className="ticket-description flex mt-6 h-40 overflow-scroll scrollbar-default border-2 p-2 rounded-md">
					<p className="text-2xl break-words">
						Description: {ticket.description}
					</p>
				</div>
				<div className="buttons relative flex justify-center mt-6 w-full ">
					<div className="w-full h-32 bg-gray-300 flex justify-around items-center rounded-md">
						{ticket.status === 'Completed' ? (
							<button
								className="btn btn-primary"
								onClick={() => initiateReopenTicket()}
							>
								Reopen Ticket
							</button>
						) : currentPage === 'tasks' ? (
							<button
								className="btn btn-primary"
								onClick={() => initiateCompleteTicket()}
							>
								Mark Completed
							</button>
						) : currentPage === 'home' ? (
							<button
								className="btn btn-primary"
								onClick={() => initiateClaimTicket()}
							>
								Claim Ticket
							</button>
						) : null}
						<button
							className="btn btn-error"
							onClick={() => initiateDeleteTicket()}
						>
							Delete Ticket
						</button>
						<button
							className="btn btn-warning"
							onClick={() => setIsOpen(false)}
						>
							Back
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default TicketCard;
