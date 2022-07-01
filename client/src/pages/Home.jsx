import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';

const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const guestSignInSubmit = async (e) => {
		e.preventDefault();

		const userData = {
			email: 'guest@strombo.com',
			password: '12345678',
		};

		await dispatch(login(userData));

		await navigate('/dashboard');
	};

	return (
		<div className="h-screen w-screen bg-white">
			<Navbar />
			<div className="flex  flex-col w-screen h-4/5 justify-center items-center">
				<div className="bg-gray-300 p-8 rounded-3xl h-3/6 flex flex-col justify-center">
					<div className="landing-text my-6">
						<h1 className="text-8xl text-white">Welcome to Strombo.</h1>
						<h2 className="text-5xl mx-4">Manage your projects with ease.</h2>
					</div>

					<div className="button-div flex justify-end mx-40">
						<Link to="/login">
							<button className="btn btn-primary mx-4">Log In</button>
						</Link>
						<Link to="/register">
							<button className="btn btn-secondary">Sign Up</button>
						</Link>
						<button
							className="btn btn-info text-white font-bold py-2 px-4 mx-4"
							type="submit"
							onClick={guestSignInSubmit}
						>
							Guest Sign In
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
