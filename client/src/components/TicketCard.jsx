import React from 'react';
import { useSelector } from 'react-redux';

const TicketCard = ({ ticket }) => {
	const { project } = useSelector((state) => state.project);

	return (
		<div className="flex justify-center bg-">
			<div className="bg-white w-5/6 h-32 rounded-xl shadow-md mb-5">
				<div
					className={`w-full h-10 ${
						ticket.severity === 'urgent'
							? 'bg-red-400'
							: ticket.severity === 'normal'
							? 'bg-green-400'
							: ticket.severity === 'trivial'
							? 'bg-sky-300'
							: null
					} `}
				></div>
				<p className="p-4">{ticket.name}</p>
			</div>
		</div>
	);
};

export default TicketCard;
