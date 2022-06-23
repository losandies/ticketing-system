import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { claimTicket, deleteTicket } from '../features/ticket/ticketSlice';
import Modal from '../components/Modal';
import { toast } from 'react-toastify';

import { MdDelete } from 'react-icons/md';

const TicketCard = ({ ticket }) => {
	const { project } = useSelector((state) => state.project);
	const { currentPage } = useSelector((state) => state.navigation);
	const { isLoading, isSuccess, isError } = useSelector(
		(state) => state.ticket
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isOpen, setIsOpen] = useState(false);

	const ticketData = {
		ticketId: ticket._id,
		projectId: project._id,
	};

	const initiateClaimTicket = () => {
		dispatch(claimTicket(ticketData));
		toast.success('Ticket Claimed!');
		setIsOpen(false);
	};
	const initiateDeleteTicket = () => {
		dispatch(deleteTicket(ticketData));
		toast.success('Ticket Deleted!');
		setIsOpen(false);
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
						ticket.severity === 'urgent'
							? 'bg-red-400'
							: ticket.severity === 'normal'
							? 'bg-green-400'
							: ticket.severity === 'trivial'
							? 'bg-sky-300'
							: null
					} sticky top-0 z-10 flex`}
				>
					<h2 className="pt-3 pl-2 text-white text-sm">
						Deadline: {ticket.deadline}
					</h2>
					<h2 className="absolute right-2 pt-3 pr-2 text-white text-sm">
						Status: {ticket.status}
					</h2>
				</div>

				<p className="p-4">{ticket.description}</p>
			</div>
			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				<div className="ticket-header flex justify-center items-center w-full h-20 bg-gray-300 rounded-md">
					<p className="text-2xl">Ticket ID - {ticket._id}</p>
				</div>
				<div className="ticket-description flex justify-center mt-14">
					<p className="text-2xl">{ticket.description}</p>
				</div>
				<div className="buttons absolute bottom-10 w-full flex ml-7">
					<div className="w-4/5 h-32 bg-gray-300 flex justify-around items-center rounded-md">
						{currentPage === 'home' ? (
							<button
								className="btn btn-primary"
								onClick={() => initiateClaimTicket()}
							>
								Claim Ticket
							</button>
						) : currentPage === 'tasks' ? (
							<button
								className="btn btn-primary"
								onClick={() => initiateClaimTicket()}
							>
								Mark Completed
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
