import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import waves from '../assets/images/wave.png';

const Home = () => {
	return (
		<div className="h-screen w-screen">
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
