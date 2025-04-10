/* eslint-disable react/prop-types */
import "../../styles/index.css";
import GradientButton from "./Content/GradientButton";
import HeadingPara from "./Content/HeadingPara";
import HeroCard from "./Content/HeroCard";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroContent({ h1, main, p, buttonGIT, button, link }) {
    return (
        <div
            className="w-[75vw] sm:w-[48vw] md:w-[40vw] lg:w-[40vw] xl:w-[45vw] 2xl:w-[40rem] sm:p-4 xl:pl-20 mx-auto sm:mx-0 xl:mt-24 xl:my-15"
            id="hero-content"
        >
            <div className="flex flex-col justify-start xl:items-start -translate-x-1 sm:-translate-x-0">
                <HeadingPara heading={h1} hMain={main} para={p} pMain={main} />
                <div
                    className={`flex ${
                        main ? "-translate-x-4 sm:-translate-x-0" : " "
                    }`}
                >
                    <Fade direction="up" delay={900} triggerOnce={true} >
                        <GradientButton
                            GIT={buttonGIT}
                            button={button}
                            navlinks={link}
                        />
                    </Fade>
                    <Fade direction="up" delay={1200} triggerOnce={true} >
                        <button className="ml-5 font-[Gilroy] sm:hidden  mt-8">
                            <NavLink to="/aboutus">
                                Learn more
                                <span className="pl-1  font-black text-[1rem]">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </NavLink>
                        </button>
                    </Fade>
                </div>

                <HeroCard requied={main} />
            </div>
        </div>
    );
}
