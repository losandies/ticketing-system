import React from 'react';

const TeamItem = ({ team }) => {
	return (
		<div className="flex items-center bg- ml-4 mb-6">
			<div className="w-5 h-5 rounded-full bg-emerald-500  mr-5"></div>
			<p className="text-xl">{team}</p>
		</div>
	);
};

export default TeamItem;
