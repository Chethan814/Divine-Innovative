import Logo from "/asstes/Logo/logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div
                className=" w-[85vw] sm:w-[45vw] md:w-[40vw] lg:w-[45vw] xl:w-aut 2xl:w-[50rem] xl:h-[10vh] mt-8 xl:mt-3 mx-auto sm:mx-0 sm:mt-12 lg:px-4 xl:ml-8 xl:pl-2 flex items-center justify-around lg:justify-between  2xl:justify-around "
                id="nav-bar"
            >
                <div>
                    <NavLink to="/" className="flex flex-row items-center xl:gap-4 ">
                        <div>
                            <img src={Logo} alt="Logo" className="w-10 sm:w-12  xl:w-18" />
                        </div>
                        <div className="hidden lg:block font-gilroy-semibold text-[1rem] xl:text-[1.6rem] md:-translate-y-[0.16rem] xl:-translate-y-[0.1rem] lg:leading-5 lg:pl-2 xl:pl-0 ">
                            <span className="text-[1.3rem] md:text-[1.5rem] xl:text-[2rem] ">D</span>ivine <br />
                            <span className="text-[1.3rem] md:text-[1.4rem] xl:text-[1.8rem]">I</span>nnovative
                        </div>
                    </NavLink>
                </div>
                <div>
                    <ul className="w-57 lg:w-auto xl:w- flex items-center justify-between xl:justify-start xl:items-start lg:gap-13   xl:pr-8  xl:translate-y-[0.1rem] xl:translate-x-15  font-gilroy-light text-[0.999rem] xl:text-[1.35rem]  ">
                        <li className=" ">
                            <NavLink className={({isActive})=> isActive ? ' underline underline-offset-4' : "" } to="/aboutus">About us</NavLink>{" "}
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ? ' underline underline-offset-4' : "" } to="/Services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ? ' underline underline-offset-4' : "" } to="/Portfolio">Portfolio</NavLink>
                        </li>
                    </ul>
                    <hr className="hidden lg:block text-black rotate-90 w-9 translate-x-17 xl:translate-x-37 -translate-y-3 rounded-2xl" />
                    <hr className="hidden lg:block text-black rotate-90 w-9 translate-x-42 xl:translate-x-68 -translate-y-3 rounded-2xl" />
                </div>
            </div>
        </>
    );
}
