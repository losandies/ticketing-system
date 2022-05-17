import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar absolute bg-base-100 w-screen z-10">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					Strombo
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal p-0">
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>

					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
