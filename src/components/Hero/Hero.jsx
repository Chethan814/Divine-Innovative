import React from "react";
import NavBar from "../Nav/NavBar";
import HeroContent from "../Design/HeroContent";
import Minimalistic from "../Design/Minimalistic";

export default function HeroSection(props) {
    return (
        <>
            <div className="w-[95vw] mx-auto bg-[#ffffff] flex  justify-center select-none ">
                <NavBar />
                <HeroContent
                    main={props.main}
                    button={props.button}
                    buttonGIT={props.buttonGIT}
                    h1={props.h1}
                    p={props.p}
                />
                <Minimalistic />
            </div>
        </>
    );
}
