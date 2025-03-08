/* eslint-disable react/prop-types */
// import React from "react";
import "../../styles/index.css";
import GradientButton from "./Content/GradientButton";
import HeadingPara from "./Content/HeadingPara";
import HeroCard from "./Content/HeroCard";
// import Rights from "./Content/Rights";

export default function HeroContent({ h1, main, p, buttonGIT, button, link }) {
    return (
        <div
            className="w-[75vw] sm:w-[48vw] md:w-[40vw] lg:w-[40vw] xl:w-[45vw] 2xl:w-[40rem] sm:p-4 xl:pl-20 mx-auto sm:mx-0 xl:mt-24 xl:my-15"
            id="hero-content"
        >
            <div className="flex flex-col justify-start xl:items-start -translate-x-1 sm:-translate-x-0">
                <HeadingPara heading={h1} hMain={main} para={p} pMain={main} />
                <div className="">
                    <GradientButton
                        GIT={buttonGIT}
                        button={button}
                        navlinks={link}
                    />
                    
                </div>

                {/* <Rights rMain={main} /> */}
                <HeroCard requied={main} />
            </div>
        </div>
    );
}
