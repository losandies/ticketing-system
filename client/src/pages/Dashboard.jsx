import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import { useSelector } from 'react-redux';

import DashboardHome from '../components/content/DashboardHome';
import DashboardTasks from '../components/content/DashboardTasks';
import DashboardRecent from '../components/content/DashboardRecent';

const Dashboard = () => {
	const { currentPage, isLoading } = useSelector((state) => state.navigation);

	return (
		<div className="flex">
			<Sidebar />
			{(() => {
				if (currentPage === 'home') {
					return <DashboardHome />;
				} else if (currentPage === 'tasks') {
					return <DashboardTasks />;
				} else if (currentPage === 'recent') {
					return <DashboardRecent />;
				}
			})()}
		</div>
	);
};

export default Dashboard;
