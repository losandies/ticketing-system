import React from 'react';

const TeamItem = ({ team }) => {
	return (
		<div className="flex items-center ml-4 mb-6">
			<div className="w-5 h-5 rounded-full bg-slate-600 mr-5"></div>
			<p className="text-xl">{team}</p>
		</div>
	);
};

export default TeamItem;
