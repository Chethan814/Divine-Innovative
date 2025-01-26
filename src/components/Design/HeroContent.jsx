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
                className="w-[45vw] p-4 my-10 rounded-4xl translate-y-20 select-none"
                id="hero-content"
            >
                <div className="mt-20 ml-14">
                    <div>
                        <HeadingPara
                            heading={props.h1}
                            hMain={props.main}
                            para={props.p}
                            pMain={props.main}
                        />
                        <div>
                            <GradientButton 
                            GIT={props.buttonGIT}
                            button={props.button}
                            />
                        </div>
                    </div>
                </div>
                <HeroCard requied={props.main} />
                <Rights rMain={props.main} />

            </div>
        </>
    );
}