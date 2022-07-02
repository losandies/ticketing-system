import React from 'react';
import ProjectList from '../components/dash-home/ProjectList';
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<>
			<div className="home flex flex-col h-screen w-full bg-white border-l-2 border-l-gray-300">
				<div className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
					<div className="header-title w-full text-3xl ml-8 relative bottom-2 ">
						<h1>Projects</h1>
					</div>
					<div className="buttons flex items-center justify-end mb-10">
						<Link to="/create-project">
							<button className="btn mr-6 btn-primary text-white">
								Create Project
							</button>
						</Link>
					</div>
				</div>

				<ProjectList />
			</div>
		</>
	);
};

export default Projects;
