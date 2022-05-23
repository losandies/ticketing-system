import React from 'react';

const PinnedProject = ({ user }) => {
	return (
		// <div className="border-2 w-60 h-16 rounded-lg">
		// 	<div className="h-full w-16 bg-green-500 flex justify-center items-center rounded-l-md">
		// 		<p className="text-lg text-white">BG</p>
		// 	</div>
		// </div>

		<>
			<div className="w-72 h-20 flex flex-row">
				<div className="h-full w-20 bg-green-500 flex justify-center items-center rounded-l-md">
					<p className="text-lg text-white">BG</p>
				</div>
				<div className="w-52 h-20 border-2 border-l-0 rounded-lg rounded-l-none flex justify-around items-center">
					<h2>Graph API</h2>
					<h2>...</h2>
				</div>
			</div>
		</>
	);
};

export default PinnedProject;
