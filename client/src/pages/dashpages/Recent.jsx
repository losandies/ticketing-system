import React from 'react';

const Recent = () => {
	return (
		<div className="home flex w-full h-screen">
			<div className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
				<div className="header-title w-full text-3xl ml-10 relative bottom-2 ">
					<h1>Recent</h1>
				</div>
				<div className="buttons flex items-center justify-end mb-10">
					<button className="btn mr-6">Create</button>
					<button className="btn mr-6">Share</button>
				</div>
			</div>
		</div>
	);
};

export default Recent;
