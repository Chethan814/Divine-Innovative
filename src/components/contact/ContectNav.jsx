import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoIcon from "/asstes/Logo/BLACK-logo.png";

const ContactNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <NavLink to="/">
                            <img
                                src={LogoIcon}
                                alt="Divine logo"
                                className="w-10"
                            />
                        </NavLink>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav
                            className={`${
                                isMenuOpen ? "block" : "hidden"
                            } md:block absolute md:static bg-white md:bg-transparent top-16 left-0 w-full md:w-auto`}
                        >
                            <ul className="flex flex-col md:flex-row items-center gap-6 text-sm p-4 md:p-0">
                                <li>
                                    <NavLink
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        to='/'
                                    >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        to='/aboutus'
                                    >About us</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        to='/services'
                                    >Services</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        to='/packages'
                                    >Packages</NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            {/* Mobile Menu Button */}
                            <button
                                className="block md:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ContactNav;
