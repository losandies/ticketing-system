import React from 'react';
import logo from '../../assets/images/logo1.png';
import { HiSearch } from 'react-icons/hi';
import { ImHome } from 'react-icons/im';
import { FaTasks } from 'react-icons/fa';
import { BsClockFill } from 'react-icons/bs';

import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '../../features/navigation/navigationSlice';

import TeamItem from './TeamItem';

const Sidebar = () => {
	const { user } = useSelector((state) => state.auth);
	const { currentPage } = useSelector((state) => state.navigation);

	const dispatch = useDispatch();

	const onClick = (e) => {
		dispatch(navigate(e.target.id));
	};

	return (
		<>
			<div className="sidebar bg-gray-200 bg-opacity-50 w-96 min-w-96 h-screen p-4 border-r-2">
				<div className="logo-div flex items-center my-2 mb-10">
					<img
						style={{ height: '50px', width: '50px' }}
						src={logo}
						alt="logo"
						className="mx-4"
					/>
					<h1 className="text-4xl font-semibold">strombo</h1>
				</div>
				<div className="user-info flex ">
					<div className="user-avatar flex items-center mx-4 mb-10">
						<div className="avatar bg-white w-14 h-14 rounded-full"></div>
					</div>
					<div className="user-name">
						<p className="font-semibold text-xl">{user.name}</p>
						<p className="text-lg">Team Name</p>
					</div>
				</div>
				<div className="flex items-center justify-center mb-10">
					<input
						type="text"
						className="input text-lg w-full border-2 border-slate-300"
						placeholder="Search"
					/>
					<HiSearch
						className="text-3xl"
						style={{
							position: 'fixed',
							left: '250px',
							color: 'gray',
						}}
					/>
				</div>
				<div className="page-navigation flex items-center mb-12">
					<ul className="w-full">
						<button
							id="home"
							className={`flex text-xl my-4 p-4 w-full ${
								currentPage === 'home' ? 'bg-gray-300' : null
							} bg-opacity-70 rounded-lg ease-in duration-200`}
							onClick={onClick}
						>
							<ImHome
								className="text-3xl"
								style={{ position: 'relative', bottom: '2px' }}
							/>
							<p id="home" className="ml-4">
								Home
							</p>
						</button>
						<button
							id="tasks"
							className={`flex text-xl my-4 p-4 w-full ${
								currentPage === 'tasks' ? 'bg-gray-300' : null
							} bg-opacity-70 rounded-lg ease-in duration-200`}
							onClick={onClick}
						>
							<FaTasks className="text-3xl" style={{ position: 'relative' }} />
							<p id="tasks" className="ml-4">
								My Tasks
							</p>
						</button>
						<button
							id="recent"
							className={`flex text-xl my-4 p-4 w-full ${
								currentPage === 'recent' ? 'bg-gray-300' : null
							} bg-opacity-70 rounded-lg ease-in duration-200`}
							onClick={onClick}
						>
							<BsClockFill
								className="text-3xl"
								style={{ position: 'relative' }}
							/>
							<p id="recent" className="ml-4">
								Recent
							</p>
						</button>
					</ul>
				</div>
				<div className="teams flex flex-col ml-4 mb-5">
					<p className="text-xl ">TEAMS</p>
				</div>
				<TeamItem team="Refactoring UI" />
				<TeamItem team="Tailwind CSS" />
				<TeamItem team="NothingWorks" />
			</div>
		</>
	);
};

export default Sidebar;
