import React from 'react';

const DashboardHome = () => {
	return (
		<div className="home flex flex-col w-full h-screen">
			<div className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
				<div className="header-title w-full text-3xl ml-10 relative bottom-2 ">
					<h1>Home</h1>
				</div>
				<div className="buttons flex items-center justify-end mb-10">
					<button className="btn mr-6">Create</button>
					<button className="btn btn-primary text-white mr-6">Share</button>
				</div>
			</div>
			<section className="pinned-projects">
				<h3 className="ml-10 mt-6">PINNED PROJECTS</h3>
				<div className="ml-10 mt-2">Project goes here</div>
			</section>
		</div>
	);
};

export default DashboardHome;
