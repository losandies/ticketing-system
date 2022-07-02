import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { createProject, reset } from '../features/project/projectSlice';

const CreateProject = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isSuccess, isError, message } = useSelector((state) => state.project);

	const [formData, setFormData] = useState({
		name: '',
		description: '',
		deadline: '',
	});

	const { name, description, deadline } = formData;

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess) {
			dispatch(reset());

			navigate('/dashboard');
		}

		dispatch(reset());
	}, [dispatch, isError, isSuccess, navigate, message]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createProject(formData));
	};

	return (
		<div className="flex">
			<Sidebar />
			<div className="flex relative flex-col w-full h-screen z-10 bg-white">
				<div className="flex justify-center w-full h-full px-32">
					<div className="form-container bg-gray-200  flex flex-col items-center justify-center w-[800px] h-[700px] mt-28 rounded-2xl">
						<div className="header-title text-3xl mb-6">
							<h1>Create a new project</h1>
						</div>
						<form className="form flex flex-col w-full justify-around ">
							<div className="form flex flex-row justify-center items-center">
								<div className="form-control w-1/3 mr-44">
									<label htmlFor="project-name text-xl">Project Name:</label>
									<input
										name="name"
										value={name}
										type="text"
										className="input border-2 border-gray-400"
										required
										onChange={onChange}
									/>
								</div>
								<div className="form-control w-1/5">
									<label htmlFor="project-name">Project Deadline:</label>
									<input
										name="deadline"
										value={deadline}
										type="date"
										min={new Date().toISOString().split('T')[0]}
										className="input border-2 border-gray-400"
										required
										onChange={onChange}
									/>
								</div>
							</div>
							<div className="form-bottom flex flex-col items-center">
								<div className="form-control w-3/4 mt-6">
									<label htmlFor="project-name">Project Description:</label>
									<textarea
										name="description"
										value={description}
										cols="30"
										rows="10"
										className="textarea border-gray-400 border-2 resize-none"
										required
										onChange={onChange}
									></textarea>
								</div>
								<div className="form-control w-3/4 mt-16">
									<button
										className="btn btn-primary text-2xl text-white"
										onClick={onSubmit}
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateProject;
