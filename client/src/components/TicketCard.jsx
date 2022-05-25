import React from 'react';
import { useSelector } from 'react-redux';

const TicketCard = ({ ticket }) => {
	const { project } = useSelector((state) => state.project);
	return (
		<div className="flex justify-center ">
			<div className="bg-white w-5/6 h-32 rounded-xl shadow-md p-6">
				{ticket.name}
			</div>
		</div>
	);
};

export default TicketCard;
