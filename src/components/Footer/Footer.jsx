/* eslint-disable no-unused-vars */
import React from "react";

import GradientButton from "../Design/Content/GradientButton";
import FooterRights from "./FooterRights";
import { Fade } from "react-awesome-reveal";

function Footer() {
    const heading = (
        <>
            <span className="text-stroke">We</span> innovate <br />{" "}
            <span className="text-stroke">through</span> creativity.
        </>
    );
    const description = `Our unconventional process generates unconventional outcomes `;

    // sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-pink-400 2xl:bg-amber-400
    return (
        <section className="font-gilroy text-center flex flex-col justify-center items-center w-[80vw] sm:w-[90vw] xl:w-[80vw] mx-auto mt-20 mb-5 p-2  || ">
            <div>
                <Fade direction="down" triggerOnce={true}>
                    <h2 className="font-black  w-80 sm:w-auto text-4xl sm:text-5xl md:text-6xl">
                        {heading}
                    </h2>
                </Fade>
            </div>
            <div className=" w-80 mt-4 font-light text-[0.9rem]">
                <Fade direction="down" triggerOnce={true}>
                    <p>{description}</p>
                </Fade>
            </div>
            <div>
                <Fade direction="up" triggerOnce={true}>
                    <GradientButton
                        button={true}
                        GIT={true}
                        navlinks="contact"
                    />
                </Fade>
            </div>
            <div>
                <Fade direction="up" triggerOnce={true}>
                    <FooterRights />
                </Fade>
            </div>
        </section>
    );
}

export default Footer;
