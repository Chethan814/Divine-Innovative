import React from "react";

import "../../styles/index.css";
import GradientButton from "./Content/GradientButton";
import HeadingPara from "./Content/HeadingPara";
import HeroCard from "./Content/HeroCard";
import Rights from "./Content/Rights";

export default function HeroContent(props) {
    return (
        <>
            <div
                className="w-[75vw] sm:w-[48vw]  md:w-[40vw] lg:w-[40vw] 2xl:w-[40rem]  sm:p-4 xl:pl-20 mx-auto sm:mx-0 xl:mt-24 xl:my-15 "
                id="hero-content"
            >
                <div className=" flex flex-col items-center justify-start xl:items-start ">
                    <HeadingPara
                        heading={props.h1}
                        hMain={props.main}
                        para={props.p}
                        pMain={props.main}
                    />
                    <div className="sm:w-[45vw] md:w-[37vw] lg:mr-14   ">
                        <GradientButton
                            GIT={props.buttonGIT}
                            button={props.button}
                        />
                    </div>

                    <HeroCard requied={props.main} />
                    <Rights rMain={props.main} />
                </div>
            </div>
        </>
    );
}
