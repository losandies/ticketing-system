import React from 'react';
import Sidebar from '../components/Sidebar';

import Projects from './Projects';

const Dashboard = () => {
	return (
		<>
			<div className="flex h-[100%]">
				<Sidebar />
				<Projects />
			</div>
		</>
	);
};

export default Dashboard;
