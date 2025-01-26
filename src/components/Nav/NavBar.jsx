import React from "react";
import Logo from "../../../public/asstes/Logo/logo.png";
import { Navigate, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div
                className="w-[50vw] h-[10vh] absolute left-10 top-10 || flex items-center justify-between"
                id="nav-bar"
            >
                <div className="flex items-center gap-4 ">
                    <NavLink to="/" className="flex items-center gap-4">
                        <div>
                            <img src={Logo} alt="Logo" className="w-18" />
                        </div>
                        <div className="font-gilroy-semibold text-[1.6rem] -translate-y-[0.1rem]">
                            <span className="text-[2rem] ">D</span>ivine{" "}
                            <span className="text-[1.8rem]">I</span>nnovative
                        </div>
                    </NavLink>
                </div>
                <div>
                    <ul className="flex items-center justify-between gap-16 pr-8 translate-y-[0.1rem] || font-gilroy-light text-[1.35rem] ">
                        <li>
                            <NavLink to="/aboutus ">About us</NavLink>{" "}
                        </li>
                        <li>
                            <NavLink to="/Services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Portfolio">Portfolio</NavLink>
                        </li>
                    </ul>
                    <hr className=" text-black rotate-90 w-9 translate-x-23 -translate-y-3 rounded-2xl" />
                    <hr className=" text-black rotate-90 w-9 translate-x-58 -translate-y-3 rounded-2xl" />
                </div>
            </div>
        </>
    );
}
