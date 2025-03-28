import Logo from "/asstes/Logo/BLACK-logo.png";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function NavBar() {
    return (
        <div
            className="w-full sm:w-[45vw] md:w-[40vw] lg:w-[45vw] xl:w-auto 2xl:w-[50rem] xl:h-[10vh] mt-8 xl:mt-3 mx-auto sm:mx-0 sm:mt-12 lg:px-4 xl:ml-8 xl:pl-2 flex items-center justify-around lg:justify-between 2xl:justify-around select-none"
            id="nav-bar"
        >
            <Fade direction="down" triggerOnce={true}>
                <NavLink to="/" className="select-none">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-10 sm:w-13 xl:w-16 -translate-x-13 sm:translate-x-0 lg:translate-x-6 xl:-translate-x-12"
                    />
                </NavLink>
            </Fade>
            <div>
                <Fade cascade damping={0.4} direction="down" triggerOnce={true} delay={500}>
                    <ul className="hidden sm:w-57 lg:w-auto sm:flex items-center justify-between xl:justify-start xl:items-start lg:gap-13 xl:pr-8 xl:translate-y-[0.1rem] xl:translate-x-15 font-gilroy-light text-[0.999rem] xl:text-[1.35rem]">
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
                    <hr className="hidden lg:block text-black rotate-90 w-9 translate-x-17 xl:translate-x-37 -translate-y-3 rounded-2xl" />
                    <hr className="hidden lg:block text-black rotate-90 w-9 translate-x-42 xl:translate-x-68 -translate-y-3 rounded-2xl" />
                </Fade>
            </div>
        </div>
    );
}
