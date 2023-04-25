import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getSingleProject,
    deleteProject,
    reset,
    getProjects,
} from "../features/project/projectSlice";

import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

import { MdDelete } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";

const ProjectList = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

    const { projects, isLoading } = useSelector((state) => state.project);
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getProjectsOnLoad = () => {
        dispatch(getProjects());

        setTimeout(() => {
            dispatch(reset());
        }, 1000);
    };

    const getProject = async (project) => {
        await dispatch(getSingleProject(project._id));
        await navigate(`/project/${project._id}`);
    };

    const initDeleteProject = async (project) => {
        if (user._id !== project.createdBy._id)
            return toast.error(
                "Only the creator of this project can delete it."
            );

        await dispatch(deleteProject(project._id));
        await getProjectsOnLoad();
    };

    useEffect(() => {
        getProjectsOnLoad();
    }, []);

    if (isLoading && !isMobile) return <Spinner />;

    return isMobile ? (
        <div className="h-full mb-28 md:mb-0">
            <table className="shadow-lg bg-white ">
                <thead className=" bg-gray-100">
                    <tr>
                        <th className="border-b-2 border-top-2 text-left px-8 py-2">
                            <p className="text-lg font-normal text-gray-400">
                                PROJECT
                            </p>
                        </th>
                        <th className="border-b-2 border-top-2 text-left px-8 py-2">
                            <p className="text-lg font-normal text-gray-400">
                                DEADLINE
                            </p>
                        </th>
                        <th className="border-b-2 border-top-2 text-left px-8 py-"></th>
                    </tr>
                </thead>
                <tbody className="w-screen overflow-y-scroll">
                    {projects.map((project) => (
                        <tr
                            className="hover:bg-gray-100 hover:cursor-pointer active:bg-gray-300"
                            key={project._id}
                        >
                            <td
                                className=" px-8 border-b-2 py-4"
                                onClick={() => getProject(project)}
                            >
                                {project.name}
                            </td>
                            <td
                                className=" px-8 border-b-2 py-4"
                                onClick={() => getProject(project)}
                            >
                                {project.deadline}
                            </td>
                            <td className=" px-8 border-b-2 py-4">
                                <MdDelete
                                    className="text-3xl md:hover:text-red-500"
                                    onClick={() => initDeleteProject(project)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
        <div className="max-h-[100%] w-fit md:w-[100%]">
            <table className="shadow-lg bg-white w-full">
                <thead className=" bg-gray-100">
                    <tr>
                        <th className="border-b-2 border-top-2 text-left px-8 py-4">
                            <p className="text-lg font-normal text-gray-400">
                                PROJECT
                            </p>
                        </th>
                        <th className="border-b-2 border-top-2 text-left px-8 py-4">
                            <p className="text-lg font-normal text-gray-400">
                                DESCRIPTION
                            </p>
                        </th>
                        <th className="border-b-2 border-top-2 text-left px-8 py-4">
                            <p className="text-lg font-normal text-gray-400">
                                DEADLINE
                            </p>
                        </th>
                        <th className="border-b-2 border-top-2 text-left px-8 py-4">
                            <p className="text-lg font-normal text-gray-400"></p>
                        </th>
                    </tr>
                </thead>
                <tbody className="w-screen overflow-y-scroll">
                    {projects.map((project) => (
                        <tr
                            className="hover:bg-gray-100 hover:cursor-pointer active:bg-gray-300"
                            key={project._id}
                        >
                            <td
                                className=" px-8 border-b-2 py-4"
                                onClick={() => getProject(project)}
                            >
                                {project.name}
                            </td>
                            <td
                                className=" px-8 border-b-2 py-4"
                                onClick={() => getProject(project)}
                            >
                                {project.description}
                            </td>
                            <td
                                className=" px-8 border-b-2 py-4"
                                onClick={() => getProject(project)}
                            >
                                {project.deadline}
                            </td>
                            <td className=" px-8 border-b-2 py-4">
                                <MdDelete
                                    className="text-3xl hover:text-red-500"
                                    onClick={() => initDeleteProject(project)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ProjectList;
