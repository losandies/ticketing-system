import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import { useSelector } from 'react-redux';

import DashboardHome from '../pages/dashpages/DashboardHome';
import DashboardTasks from '../pages/dashpages/DashboardTasks';
import DashboardRecent from '../pages/dashpages/DashboardRecent';
import Spinner from '../components/Spinner';

const Dashboard = () => {
	const { currentPage } = useSelector((state) => state.navigation);

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
