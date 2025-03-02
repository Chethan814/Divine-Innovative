import { useState } from "react";
import Logo from "/asstes/Logo/BLACK-logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const [phoneNav, setPhoneNav] = useState(false);

    function phoneNavHandling() {
        setPhoneNav((navState) => !navState);
    }

    return (
        <div
            className="w-[85vw] sm:w-[45vw] md:w-[40vw] lg:w-[45vw] xl:w-auto 2xl:w-[50rem] xl:h-[10vh] mt-8 xl:mt-3 mx-auto sm:mx-0 sm:mt-12 lg:px-4 xl:ml-8 xl:pl-2 flex items-center justify-around lg:justify-between 2xl:justify-around"
            id="nav-bar"
        >
            <NavLink to="/" className="flex flex-row items-center xl:gap-4">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-8 sm:w-13 xl:w-12 -translate-x-13 sm:translate-x-0 sm:-translate-y-2"
                />
                <div className="hidden lg:block font-gilroy-semibold text-[1rem] xl:text-[1.6rem] md:-translate-y-[0.16rem] xl:-translate-y-[0.1rem] lg:leading-5 lg:pl-2 xl:pl-0">
                    <span className="text-[1.3rem] md:text-[1.5rem] xl:text-[2rem]">
                        D
                    </span>
                    ivine <br />
                    <span className="text-[1.3rem] md:text-[1.4rem] xl:text-[1.8rem]">
                        I
                    </span>
                    nnovative
                </div>
            </NavLink>
            <div>
                <div className="sm:hidden translate-x-8">
                    <span className="text-3xl" onClick={phoneNavHandling}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>
                <div
                    className={`${
                        phoneNav
                            ? "bg-white z-100 w-[100vw] overflow-hidden h-[100vh] absolute top-0 left-0 sm:bg-transparent sm:hidden"
                            : "hidden"
                    }`}
                >
                    <div className="absolute right-8 top-8">
                        <span className="text-4xl" onClick={phoneNavHandling}>
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                    </div>
                    <div className="w-full h-full">
                        <ul className="w-full h-full flex flex-col items-center justify-center gap-13 text-2xl font-bold">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "underline underline-offset-4"
                                            : ""
                                    }
                                    to="/"
                                    end
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "underline underline-offset-4"
                                            : ""
                                    }
                                    to="/aboutus"
                                >
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "underline underline-offset-4"
                                            : ""
                                    }
                                    to="/Services"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "underline underline-offset-5"
                                            : ""
                                    }
                                    to="/Packages"
                                >
                                    Packages
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="hidden sm:w-57 lg:w-auto sm:flex items-center justify-between xl:justify-start xl:items-start lg:gap-13 xl:pr-8 xl:translate-y-[0.1rem] xl:translate-x-15 font-gilroy-light text-[0.999rem] xl:text-[1.35rem]">
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "underline underline-offset-4" : ""
                            }
                            to="/aboutus"
                        >
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "underline underline-offset-4" : ""
                            }
                            to="/Services"
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "underline underline-offset-5" : ""
                            }
                            to="/Packages"
                        >
                            Packages
                        </NavLink>
                    </li>
                </ul>
                <hr className="hidden lg:block text-black rotate-90 w-9 translate-x-17 xl:translate-x-37 -translate-y-3 rounded-2xl" />
                <hr className="hidden lg:block text-black rotate-90 w-9 translate-x-42 xl:translate-x-68 -translate-y-3 rounded-2xl" />
            </div>
        </div>
    );
}
