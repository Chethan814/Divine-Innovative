/* eslint-disable react/prop-types */
// import React from "react";
import { NavLink } from "react-router-dom";

const GradientButton = ({ button, GIT, navlinks = "" }) => {
    if (!button) return null;

    return (
        <NavLink to={`/${navlinks}`}>
            <button className="font-poppins font-normal xl:text-[26px] my-6 xl:mt-9 py-3 px-6  lg:translate-x-7 xl:translate-x-0 rounded-[8px] xl:w-[13vw] max-w-45 xl:h-[3.4rem] transition hover:scale-105 bg-gradient-to-r from-[#F8DCE0] via-[#E6E0FE] to-[#F5D6FA]">
                {GIT ? "Get in Touch" : "Learn more"}
            </button>
        </NavLink>
    );
};

export default GradientButton;