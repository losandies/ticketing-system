import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { switchCurrentPage } from '../features/navigation/navigationSlice';
import { logout } from '../features/auth/authSlice';

import logo from '../assets/images/logo1.png';
import avatar from '../assets/images/avatar-image.png';
import { ImHome } from 'react-icons/im';
import { FaTasks } from 'react-icons/fa';
import { CgLogOut } from 'react-icons/cg';

const Sidebar = () => {
	const { user } = useSelector((state) => state.auth);
	const { currentPage } = useSelector((state) => state.navigation);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onClick = (e) => {
		dispatch(switchCurrentPage(e.target.id));
		navigate(e.target.id);
	};

	const logOut = () => {
		dispatch(logout());

		navigate('/');
	};

	return (
		<div className="bg-gray-200 bg-opacity-50 max-w-[350px] w-[350px] h-[100%] flex flex-col sticky top-0 p-4 border-r-2">
			<Link
				to="/dashboard"
				className="logo-div flex items-center my-2 mb-10"
				onClick={() => dispatch(switchCurrentPage('home'))}
			>
				<img
					style={{ height: '50px', width: '50px' }}
					src={logo}
					alt="logo"
					className="mx-2"
				/>
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
					strombo
				</h1>
			</Link>

			<div className="user-info flex ">
				<div className="user-avatar flex items-center md:mx-2 mb-10">
					<div className="avatar bg-white w-14 h-14 rounded-full">
						<img
							src={avatar}
							alt="avatar"
							className="rounded-full w-14 h-14 opacity-40"
						/>
					</div>
				</div>
				<div className="user-name flex justify-center">
					<p className="font-semibold text-xl mt-3">{user.name}</p>
				</div>
			</div>

			<div className="page-navigation flex items-center mb-12">
				<ul className="w-full">
					<Link to="/dashboard">
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
					</Link>

					<Link to="/mytasks">
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
					</Link>
				</ul>
			</div>

			<div className="logout mt-20 flex">
				<button
					id="logout"
					className={`flex text-xl my-4 p-4 w-full bg-opacity-70 hover:bg-gray-600 hover:text-white rounded-lg ease-in duration-200`}
					onClick={logOut}
				>
					<CgLogOut className="text-3xl" style={{ position: 'relative' }} />
					<p id="recent" className="ml-4">
						Log Out
					</p>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
