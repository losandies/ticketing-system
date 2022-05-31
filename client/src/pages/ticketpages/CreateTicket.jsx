import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { createProject, reset } from '../../features/project/projectSlice';

const CreateTicket = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isLoading, isSuccess, isError, message, project } = useSelector(
		(state) => state.project
	);

	const [formData, setFormData] = useState({
		description: '',
		deadline: '',
		severity: '',
	});

	const { name, description, deadline, severity } = formData;

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess) {
			dispatch(reset());

			navigate(`/project/${project._id}`);
		}

		dispatch(reset());
	}, [dispatch, isError, isSuccess, navigate, message, project]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));

		console.log(formData.name);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(createProject(formData));
	};

	return (
		<div className="flex">
			<Sidebar />
			<div className="flex relative flex-col w-full h-screen z-10">
				<div className="flex justify-center w-full h-full px-32">
					<div className="form-container bg-gray-200  flex flex-col items-center justify-center w-[800px] h-[700px] mt-28 rounded-2xl">
						<div className="header-title text-3xl mb-6">
							<h1>Create a new ticket</h1>
						</div>
						<form className="form flex flex-col w-full justify-around ">
							<div className="form flex flex-row justify-center items-center">
								<div className="form-control w-1/4 mr-[200px]">
									<label htmlFor="project-name">Ticket Deadline:</label>
									<input
										name="deadline"
										value={deadline}
										type="date"
										className="input border-2 border-gray-400"
										required
										onChange={onChange}
									/>
								</div>
								<div className="form-control w-1/4">
									<label htmlFor="project-name">Ticket Urgency:</label>
									<select
										name="severity"
										value={severity}
										className="input border-2 border-gray-400"
										required
										onChange={onChange}
									>
										<option>Urgent</option>
										<option>Normal</option>
										<option>Trivial</option>
									</select>
								</div>
							</div>
							<div className="form-bottom flex flex-col items-center">
								<div className="form-control w-3/4 mt-6">
									<label htmlFor="project-name">Ticket Description:</label>
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

export default CreateTicket;
