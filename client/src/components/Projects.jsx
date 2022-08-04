import React from 'react';
import ProjectList from './ProjectList';
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<>
			<div className="flex flex-col h-full w-full bg-white md:h-screen  md:border-l-2 border-l-gray-300">
				<div className="header flex flex-row w-full h-16 border-b-2 mt-10 border-gray-300">
					<div className="header-title w-full text-2xl ml-6 md:text-3xl md:ml-8  bottom-2 ">
						<h1>Projects</h1>
					</div>
					<div className="buttons flex items-center mb-10">
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
