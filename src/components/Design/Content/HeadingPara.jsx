/* eslint-disable react/prop-types */
// import React from "react";
import { Fade } from "react-awesome-reveal";

export default function HeadingPara({
    heading,
    para,
    hMain = false,
    pMain = false,
}) {
    return (
        <section
            className={` md:w-full text-left font-gilroy-semibold ${
                hMain ? "-translate-x-1" : " "
            } `}
        >
            <div>
                <Fade direction="down" triggerOnce={true} delay={800}>
                    <h1
                        className={` font-bold sm:font-medium mt-5 sm:mt-17 xl:mt-0 md:max-w-80 lg:max-w-110 xl:max-w-140 xl:w-140 ${
                            hMain
                                ? "text-3xl sm:text-[2.3rem] lg:text-5xl xl:text-7xl leading-10 lg:leading-14 xl:leading-20 w-[22rem] lg:w-[35rem] xl:w-[47vw] -translate-x-3 sm:-translate-x-0 "
                                : " mt-8 text-5xl sm:text-[2.6rem] md:text-6xl xl:text-8xl text-stroke"
                        }`}
                    >
                        {heading}
                    </h1>
                </Fade>
            </div>
            <div>
                <Fade direction="up" triggerOnce={true} delay={800}>
                    <p
                        className={`font-gilroy xl:max-w-140 ${
                            pMain
                                ? "font-normal text-[17px] lg:text-[1.4rem] xl:text-2xl mt-2 lg:mt-4 -translate-x-3 sm:-translate-x-0 "
                                : "font-light mt-8 text-[1rem] xl:text-[1.69rem] w-70 md:w-[34vw] md:leading-7 xl:leading-10"
                        }`}
                    >
                        {para}
                    </p>
                </Fade>
            </div>
        </section>
    );
}
