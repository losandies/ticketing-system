import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../assets/images/logo1.png";
import avatar from "../assets/images/avatar-image.png";
import { switchCurrentPage } from "../features/navigation/navigationSlice";

const TopNav = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center bg-white border-b-[1px] border-gray-100 h-16 w-full sticky top-0 z-50">
            <Link
                to="/dashboard"
                className="mx-4"
                onClick={() => dispatch(switchCurrentPage("home"))}
            >
                <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
            </Link>

            <img
                src={avatar}
                alt="avatar"
                className="rounded-full w-[40px] h-[40px] mx-4 opacity-40"
            />
        </div>
    );
};

export default TopNav;
