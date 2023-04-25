import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { createTicket } from "../features/ticket/ticketSlice";
import { useMediaQuery } from "react-responsive";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

const CreateTicket = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { project } = useSelector((state) => state.project);

    const [formData, setFormData] = useState({
        description: "",
        deadline: "",
        severity: "urgent",
    });

    const { description, deadline } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const ticketData = {
        formData,
        projectId: project._id,
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(project._id);

        if (formData.description !== "" && formData.deadline !== "") {
            dispatch(createTicket(ticketData));

            navigate(`/dashboard`);

            toast.success(`Ticket created for project: ${project.name}`);
        } else {
            toast.error("Please enter the required fields");
        }
    };

    return (
        <div className="flex flex-col h-screen md:flex-row">
            {isMobile ? <TopNav /> : <Sidebar />}
            <div className="flex relative flex-col w-full h-full md:h-screen z-10 bg-white">
                <div className="flex justify-center w-full h-full md:px-32">
                    <div className="form-container bg-gray-100 md:bg-gray-200  flex flex-col items-center md:justify-center w-screen md:w-[800px] md:h-[700px] md:mt-28 md:rounded-2xl">
                        <div className="header-title text-3xl mb-6 mt-12 md:mt-[0px]">
                            <h1>Create a new ticket</h1>
                        </div>
                        <form className="form flex flex-col w-full justify-around ">
                            <div className="form flex flex-row justify-around md:justify-center items-center">
                                <div className="form-control w-[40%] md:w-1/4 md:mr-[200px]">
                                    <label htmlFor="project-name">
                                        Ticket Urgency:
                                    </label>
                                    <select
                                        name="severity"
                                        className="input border-2 border-gray-400"
                                        required
                                        onChange={onChange}
                                        defaultValue={"Urgent"}
                                    >
                                        <option value="urgent">Urgent</option>
                                        <option value="normal">Normal</option>
                                        <option value="trivial">Trivial</option>
                                    </select>
                                </div>
                                <div className="form-control w-[40%] md:w-1/4">
                                    <label htmlFor="project-name">
                                        Ticket Deadline:
                                    </label>
                                    <input
                                        name="deadline"
                                        value={deadline}
                                        type="date"
                                        max={project.deadline}
                                        className="input border-2 border-gray-400"
                                        required
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-bottom flex flex-col items-center ">
                                <div className="form-control w-[90%] md:w-3/4 mt-6">
                                    <label htmlFor="project-name">
                                        Ticket Description:
                                    </label>
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
                                <div className="form-control w-[90%] md:w-3/4 mt-6">
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

export default CreateTicket;
