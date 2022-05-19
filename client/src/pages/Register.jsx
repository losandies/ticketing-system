import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset, register } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const { isError, isLoading, user, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate('/dashboard');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, isLoading, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error('Passwords do not match');
		} else if (password.length < 8) {
			toast.error('Password must be longer than 8 characters');
		} else {
			const userData = {
				name,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

	return (
		<>
			<Navbar />
			<div className="flex items-center justify-center h-screen w-screen absolute">
				<div className="w-full max-w-sm">
					<form
						className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
						onSubmit={onSubmit}
					>
						<div className="form-header flex justify-center items-center">
							<h2 className="text-xl">Register</h2>
						</div>

						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="name"
							>
								Name
							</label>
							<input
								className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
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
								className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight "
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
								className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
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
							<input
								className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
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
								className="btn btn-primary text-white py-2 px-4 rounded"
								type="submit"
								onClick={onSubmit}
							>
								Sign Up
							</button>
							<Link
								to="/login"
								className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							>
								Have an account?
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
