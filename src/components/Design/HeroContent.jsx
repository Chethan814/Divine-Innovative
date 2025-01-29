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
                className="w-[90vw] xl:w-[50vw] 2xl:w-[40rem] xl:p-4 xl:pl-20 mx-auto xl:mt-24 xl:my-15 "
                id="hero-content"
            >
                <div className="">
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
                        <div>
                        <HeroCard requied={props.main} />
                        <Rights rMain={props.main} />
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    );
}