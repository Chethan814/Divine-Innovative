/* eslint-disable react/prop-types */
// import React from "react";
import NavBar from "../Nav/NavBar";
import HeroContent from "../Design/HeroContent";
import Minimalistic from "../Design/Minimalistic";
import PhoneNav from "../Nav/PhoneNav";

export default function HeroSection(props) {
    return (
        <>
            <div className=" overflow-x-hidden">
                
                    <PhoneNav />
                
                <div className=" xl:-translate-x-12 w-[100vw]  sm:[90vw] xl:w-[90vw]  2xl:w-[90vw]  mx-auto  flex flex-col sm:flex-row justify-evenly  select-none transform  ">
                    <div className=" flex flex-col justify-center items-center sm:justify-normal xl:mt-6 sm:ml-5  ">
                        <NavBar />

                        <HeroContent
                            main={props.main}
                            button={props.button}
                            buttonGIT={props.buttonGIT}
                            h1={props.h1}
                            p={props.p}
                            link={props.link}
                            // card={props.card}
                        />
                    </div>
                    <Minimalistic />
                </div>
            </div>
        </>
    );
}
