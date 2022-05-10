import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
	const API_URL = '/api/users/';
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		if (password !== password2) {
			return toast('Passwords do not match');
		} else if (password.length < 8) {
			return toast('Password must be longer than 8 characters');
		}

		const res = await axios.post(`${API_URL}`, formData);

		console.log(res.data);
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="w-full max-w-xs">
				<form
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
					onSubmit={onSubmit}
				>
					<div className="form-header flex justify-center items-center">
						<h2>Register</h2>
					</div>

					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="name"
						>
							Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Enter your name"
							value={name}
							name="name"
							onChange={onChange}
							required
						></input>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Please enter an email adress"
							name="email"
							value={email}
							onChange={onChange}
							required
						></input>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="password"
							placeholder="Enter a password"
							autoComplete="new-password"
							name="password"
							value={password}
							onChange={onChange}
							required
						></input>
					</div>
					<div className="mb-4">
						{/* <label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
						
						</label> */}
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="password"
							placeholder="Confirm Password"
							name="password2"
							value={password2}
							onChange={onChange}
							required
						></input>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign Up
						</button>
						<Link
							to="/forgot-password"
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						>
							Forgot Password?
						</Link>
					</div>
				</form>
				<p className="text-center text-gray-500 text-xs">
					&copy;2020 Acme Corp. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Register;
