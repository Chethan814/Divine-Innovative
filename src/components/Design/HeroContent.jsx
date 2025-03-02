/* eslint-disable react/prop-types */
// import React from "react";
import "../../styles/index.css";
import GradientButton from "./Content/GradientButton";
import HeadingPara from "./Content/HeadingPara";
import HeroCard from "./Content/HeroCard";
import Rights from "./Content/Rights";

export default function HeroContent({ h1, main, p, buttonGIT, button, link, card }) {
    return (
        <div
            className="w-[75vw] sm:w-[48vw] md:w-[40vw] lg:w-[40vw] xl:w-[45vw] 2xl:w-[40rem] sm:p-4 xl:pl-20 mx-auto sm:mx-0 xl:mt-24 xl:my-15"
            id="hero-content"
        >
            <div className="flex flex-col items-center justify-start xl:items-start">
                <HeadingPara heading={h1} hMain={main} para={p} pMain={main} />
                <div className="sm:w-[45vw] md:w-[37vw] lg:mr-14">
                    <GradientButton GIT={buttonGIT} button={button} navlinks={link} />
                </div>
                <HeroCard requied={card} />
                <Rights rMain={main} />
            </div>
        </div>
    );
}