/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const GradientButton = ({ button, GIT, navlinks }) => {
    if (!button) return null;

    return (
        <button
            className="font-poppins font-normal xl:text-[22px] my-6 xl:mt-8 lg:translate-x-7 xl:translate-x-0 py-2 px-4 rounded xl:w-[13vw] max-w-45 xl:h-[3.4rem] transition hover:scale-105 border-2 border-[#000000] sm:bg-linear-[to_right,#F8DCE0_0%,#F5DDE7_12%,#EFDEEF_24%,#ECDFF5_36%,#E6E0FE_48%,#E9DFFF_58%,#ECDCFD_69%,#EFDACF_80%,#F3D8FA_90%,#F5D6FA_100%]"
        >
            <NavLink to={`/${navlinks}`} >{GIT ? "Get in Touch" : "Learn more"}</NavLink>
        </button>
    );
};

export default GradientButton;