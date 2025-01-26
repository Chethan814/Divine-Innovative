import React from "react";
import Logo from "../../../public/asstes/Logo/logo.png";

export default function NavBar(params) {
    return (
        <>
            <div
                className="w-[50vw] h-[10vh] absolute left-10 top-10 || flex items-center justify-between"
                id="nav-bar"
            >
                <div className="flex items-center gap-4 ">
                    <div className="">
                        <img src={Logo} alt="Logo" className="w-18" />
                    </div>
                    <div className="font-gilroy-semibold text-[1.6rem] -translate-y-[0.1rem]">
                        <span className="text-[2rem] ">D</span>ivine <span className="text-[1.8rem]">I</span>nnovative
                    </div>
                </div>
                <div>
                    <ul className="flex items-center justify-between gap-16 pr-8 translate-y-[0.1rem] || font-gilroy-light text-[1.35rem] ">
                        <li>About us</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                    </ul>
                    <hr className=" text-black rotate-90 w-9 translate-x-23 -translate-y-3 rounded-2xl" />
                        <hr className=" text-black rotate-90 w-9 translate-x-58 -translate-y-3 rounded-2xl" />
                </div>
            </div>
        </>
    );
}
