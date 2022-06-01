import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';

const TicketCard = ({ ticket }) => {
	const { project } = useSelector((state) => state.project);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex justify-center bg-">
			<div
				className="bg-white w-5/6 h-32 rounded-xl shadow-md mb-5 overflow-scroll scrollbar-hide cursor-pointer"
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
					} sticky top-0 z-10 `}
				></div>

				<p className="p-4">{ticket.description}</p>
			</div>
			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				<div className="ticket-header flex justify-center items-center w-full h-20 bg-gray-300 rounded-md">
					<p className="text-2xl">Ticket ID - {ticket._id}</p>
				</div>
				<div className="ticket-description flex justify-center mt-14">
					<p className="text-2xl">{ticket.description}</p>
				</div>
				<div className="buttons absolute bottom-10 w-full flex">
					<button className="btn btn-primary mr-[500px]">Claim Ticket</button>
					<button className="btn btn-primary">Exit</button>
				</div>
			</Modal>
		</div>
	);
};

export default TicketCard;
