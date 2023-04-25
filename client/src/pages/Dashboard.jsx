import TopNav from '../components/TopNav';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../components/Sidebar';

import Projects from '../components/Projects';
import BottomNav from '../components/BottomNav';

const Dashboard = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

	return isMobile ? (
		<>
			<div className="flex flex-col w-full h-full md:flex-row  md:w-full">
				<TopNav />
				<Projects />
				<BottomNav />
			</div>
		</>
	) : (
		<>
			<div className="flex flex-col w-full h-full md:flex-row md:h-full md:w-full">
				<Sidebar />
				<Projects />
			</div>
		</>
	);
};

export default Dashboard;
