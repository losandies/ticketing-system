import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { reset, login } from '../features/auth/authSlice';
import Navbar from '../components/Navbar';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isError, isLoading, user, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

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

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	return (
		<>
			<Navbar />
			<div className="flex items-center justify-center h-screen w-screen">
				<div className="w-full max-w-sm">
					<form
						className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
						onSubmit={onSubmit}
					>
						<div className="form-header flex flex-col justify-center items-center">
							<h2 className="text-xl">Log in</h2>
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
								id="email"
								type="email"
								placeholder="Please enter an email adress"
								name="email"
								value={email}
								onChange={onChange}
								required
							></input>
						</div>
						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
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

						<div className="flex items-center justify-between mb-4">
							<button
								className="btn btn-primary text-white font-bold py-2 px-4 rounded "
								type="submit"
								onClick={onSubmit}
							>
								Sign In
							</button>
							<Link
								to="/forgot-password"
								className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							>
								Forgot Password?
							</Link>
						</div>
						<div className="flex items-center justify-center">
							<p className="text-xs">
								Dont have an account yet?{' '}
								<Link to="/register">
									<span className="text-primary underline">Sign Up</span>
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
