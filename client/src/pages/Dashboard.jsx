import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import { useSelector } from 'react-redux';

import Home from './dashpages/Home';
import Tasks from './dashpages/Tasks';
import Recent from './dashpages/Recent';
import Spinner from '../components/Spinner';

const Dashboard = () => {
	const { currentPage } = useSelector((state) => state.navigation);

	return (
		<div className="flex">
			<Sidebar />
			{(() => {
				if (currentPage === 'home') {
					return <Home />;
				} else if (currentPage === 'tasks') {
					return <Tasks />;
				} else if (currentPage === 'recent') {
					return <Recent />;
				}
			})()}
		</div>
	);
};

export default Dashboard;
