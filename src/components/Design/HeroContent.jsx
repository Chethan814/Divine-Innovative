import React from "react";

import "../../styles/index.css";
import GradientButton from "./Content/GradientButton";
import HeadingPara from "./Content/HeadingPara";
import HeroCard from "./Content/HeroCard";
import Rights from "./Content/Rights";

export default function HeroContent() {
    return (
        <>
            <div
                className="w-[45vw] p-4 my-10 rounded-4xl translate-y-20 select-none"
                id="hero-content"
            >
                <div className="mt-20 ml-14">
                    <div>
                        <HeadingPara
                            heading="About Us"
                            hMain={false}
                            para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden." 
                            pMain={false}
                        />
                        <div>
                            <GradientButton 
                            txt={'Get in Touch'} 
                            GIT={false}
                            button={true}
                            />
                        </div>
                    </div>
                </div>
                <HeroCard requied={false} />
                <Rights rMain={false} />

            </div>
        </>
    );
}