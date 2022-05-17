import React from 'react';
import logo from '../../assets/images/logo1.png';
import { HiSearch } from 'react-icons/hi';
import { ImHome } from 'react-icons/im';
import { FaTasks } from 'react-icons/fa';
import { BsClockFill } from 'react-icons/bs';

import TeamItem from './TeamItem';

const Sidebar = () => {
	return (
		<div className="sidebar flex1 bg-slate-300 bg-opacity-50 w-96 h-screen p-4">
			<div className="logo-div flex items-center my-10">
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
					<p className="font-semibold text-xl">Brandon Newsome</p>
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
						position: 'absolute',
						left: '320px',
						color: 'gray',
					}}
				/>
			</div>
			<div className="page-navigation flex items-center mb-12">
				<ul className="w-full">
					<li className="flex text-xl my-4 p-4 bg-gray-300 bg-opacity-70 rounded-lg">
						<ImHome
							className="text-3xl"
							style={{ position: 'relative', bottom: '2px' }}
						/>
						<p className="ml-4">Home</p>
					</li>
					<li className="flex text-xl my-4 p-4 bg-gray-300 bg-opacity-70 rounded-lg">
						<FaTasks className="text-3xl" style={{ position: 'relative' }} />
						<p className="ml-4">My Tasks</p>
					</li>
					<li className="flex text-xl my-4 p-4 bg-gray-300 bg-opacity-70 rounded-lg">
						<BsClockFill
							className="text-3xl"
							style={{ position: 'relative' }}
						/>
						<p className="ml-4">Recent</p>
					</li>
				</ul>
			</div>
			<div className="teams flex flex-col ml-4 mb-5">
				<p className="text-xl ">TEAMS</p>
			</div>
			<TeamItem team="Refactoring UI" />
			<TeamItem team="Tailwind CSS" />
			<TeamItem team="NothingWorks" />
		</div>
	);
};

export default Sidebar;
