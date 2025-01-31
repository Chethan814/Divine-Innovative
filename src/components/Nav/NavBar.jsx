import React from "react";
import Logo from "/asstes/Logo/logo.png";
import { Navigate, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div
                className=" w-[85vw] sm:w-[45vw] xl:w-[50vw] 2xl:w-[50rem] xl:h-[10vh] mt-8 mx-auto sm:mx-0 sm:mt-12 xl:ml-8 xl:pl-2 flex items-center justify-around 2xl:justify-around "
                id="nav-bar"
            >
                <div>
                    <NavLink to="/" className="flex flex-row items-center xl:gap-4 ">
                        <div>
                            <img src={Logo} alt="Logo" className="w-10 sm:w-12  xl:w-18" />
                        </div>
                        <div className="hidden lg:block font-gilroy-semibold text-[1rem] xl:text-[1.6rem] md:-translate-y-[0.16rem] xl:-translate-y-[0.1rem]">
                            <span className="text-[1.3rem] md:text-[1.5rem] xl:text-[2rem] ">D</span>ivine
                            <span className="text-[1.3rem] md:text-[1.4rem] xl:text-[1.8rem]">I</span>nnovative
                        </div>
                    </NavLink>
                </div>
                <div>
                    <ul className="w-57 xl:w- flex items-center justify-between xl:gap-20 2xl:gap- xl:pr-8  xl:translate-y-[0.1rem]  font-gilroy-light text-[0.999rem] xl:text-[1.35rem] ">
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
                    <hr className="hidden xl:block text-black rotate-90 w-9 translate-x-23 -translate-y-3 rounded-2xl" />
                    <hr className="hidden xl:block text-black rotate-90 w-9 translate-x-58 -translate-y-3 rounded-2xl" />
                </div>
            </div>
        </>
    );
}
