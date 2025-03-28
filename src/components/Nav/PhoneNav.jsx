import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

function PhoneNav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function handleNavToggle() {
        setIsNavOpen((prevState) => !prevState);
    }

    return (
        <>
            <div>
                <div className="sm:hidden z-100 absolute right-11 top-9 ">
                    <Fade direction="down" triggerOnce={true}>
                        <span className="text-3xl" onClick={handleNavToggle}>
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </Fade>
                </div>
                <div
                    className={`${
                        isNavOpen
                            ? "bg-white absolute z-100 w-full h-full top-0 left-0 sm:bg-transparent sm:hidden"
                            : "hidden"
                    }`}
                >
                    <div className=" translate-x-[80vw] translate-y-7 w-5">
                        <span className="text-4xl" onClick={handleNavToggle}>
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                    </div>
                    <div className="h-[100vw] w-full translate-y-20  ">
                        <Fade cascade damping={0.3}>
                            <ul className="h-[100vw] w-full flex flex-col items-center justify-center gap-13 text-2xl font-bold">
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
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PhoneNav;
