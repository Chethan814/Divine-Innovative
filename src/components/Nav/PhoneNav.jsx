import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import NavDropDown from "./NavDropDown";

function PhoneNav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function handleNavToggle() {
        setIsNavOpen((prevState) => !prevState);
    }

    return (
        <>
            <div className="sm:hidden translate-x-8">
                <span className="text-3xl" onClick={handleNavToggle}>
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </div>
            <div
                className={`${
                    isNavOpen
                        ? "bg-white z-100 w-[100vw] overflow-hidden h-[100vh] absolute top-0 left-0 sm:bg-transparent sm:hidden"
                        : "hidden"
                }`}
            >
                <div className="absolute right-8 top-8">
                    <span className="text-4xl" onClick={handleNavToggle}>
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
        </>
    );
}

export default PhoneNav;
