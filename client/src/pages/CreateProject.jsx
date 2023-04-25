import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { createProject, reset } from '../features/project/projectSlice';
import { useMediaQuery } from 'react-responsive';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';

const CreateProject = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

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
		<div className="flex flex-col h-screen md:flex-row">
			{isMobile ? <TopNav /> : <Sidebar />}
			<div className="flex relative flex-col w-full h-full md:h-screen z-10 bg-white">
				<div className="flex justify-center w-full h-full md:px-32">
					<div className="form-container  bg-gray-100 md:bg-gray-200  flex flex-col items-center md:justify-center w-screen md:w-[800px] md:h-[700px] md:mt-28 md:rounded-2xl">
						<div className="header-title text-3xl mb-6 mt-12  md:mt-[0px]">
							<h1>Create a new project</h1>
						</div>
						<form className="form flex flex-col w-full justify-around ">
							<div className="form flex flex-row justify-around md:justify-center items-center">
								<div className="form-control w-[40%] md:w-1/4 md:mr-[200px]">
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
								<div className="form-control w-[40%] md:w-1/5">
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
								<div className="form-control w-[90%] md:w-3/4 mt-6">
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
								<div className="form-control w-[90%] md:w-3/4 mt-16">
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
			{isMobile ? <BottomNav /> : null}
		</div>
	);
};

export default CreateProject;
