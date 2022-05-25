import React, { useEffect } from 'react';
import PinnedProject from '../../components/dash-home/PinnedProject';
import ProjectList from '../../components/dash-home/ProjectList';

import { navigate } from '../../features/navigation/navigationSlice';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
	const { user } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const onClick = (e) => {
		dispatch(navigate(e.target.id));
	};

	return (
		<div className="home flex flex-col w-full h-screen">
			<div className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
				<div className="header-title w-full text-3xl ml-10 relative bottom-2 ">
					<h1>Home</h1>
				</div>
				<div className="buttons flex items-center justify-end mb-10">
					<Link to="/projects/create-project">
						<button className="btn mr-6">Create</button>
					</Link>

					<button className="btn btn-primary text-white mr-6">Share</button>
				</div>
			</div>
			<section className="pinned-projects my-4">
				<h3 className="ml-10 mt-4">PINNED PROJECTS</h3>
				<div className="mx-10 my-4 flex justify-between">
					<PinnedProject />
					<PinnedProject />
					<PinnedProject />
					<PinnedProject />
				</div>
			</section>
			<section className="all-projects">
				<ProjectList />
			</section>
		</div>
	);
};

export default Home;
