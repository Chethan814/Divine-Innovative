import React from "react";
import NavBar from "../Nav/NavBar";
import HeroContent from "../Design/HeroContent";
import Minimalistic from "../Design/Minimalistic";

export default function HeroSection(props) {
    return (
        <>
            <div
                className=" bg-[#ffffff] sm:bg-red-300 md:bg-blue-300 lg:bg-green-300 xl:bg-purple-300 2xl:bg-yellow-300 || 
            || w-[100vw] xl:w-[95vw] 2xl:w-[90vw] || xl:mx-auto || flex  justify-center select-none "
            >
                <div className=" xl:flex flex-col xl:mt-10 xl:ml-5 ">
                    <NavBar />
                    <HeroContent
                        main={props.main}
                        button={props.button}
                        buttonGIT={props.buttonGIT}
                        h1={props.h1}
                        p={props.p}
                    />
                </div>
                <Minimalistic />
            </div>
        </>
    );
}
