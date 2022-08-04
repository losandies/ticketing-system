import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/logo1.png';
import avatar from '../assets/images/avatar-image.png';

import { logout } from '../features/auth/authSlice';
import { switchCurrentPage } from '../features/navigation/navigationSlice';

import { ImHome } from 'react-icons/im';
import { FaTasks } from 'react-icons/fa';
import { CgLogOut } from 'react-icons/cg';

const BottomNav = () => {
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
		<div className="flex justify-around items-center bg-gray-200 h-16 w-full border-t-[1px] border-gray-300 fixed bottom-0 z-10">
			<Link
				to="/tasks"
				id="tasks"
				className={`flex w-1/3 h-16 items-center justify-center ${
					currentPage === 'tasks' ? 'bg-gray-700 text-emerald-600' : null
				}`}
				onClick={onClick}
			>
				<FaTasks className="text-3xl" />
			</Link>
			<Link
				to="/dashboard"
				id="home"
				className={`flex w-1/3 h-16 items-center justify-center ${
					currentPage === 'home' ? 'bg-gray-300 text-emerald-600' : null
				}`}
				onClick={onClick}
			>
				<ImHome className="text-3xl" />
			</Link>

			<div className="flex w-1/3 h-16 items-center justify-center">
				<button id="logout" onClick={logOut}>
					<CgLogOut className="text-4xl" style={{ position: 'relative' }} />
				</button>
			</div>
		</div>
	);
};

export default BottomNav;
