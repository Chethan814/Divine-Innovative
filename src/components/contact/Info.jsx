/* eslint-disable react/prop-types */
// import React from "react";

import { Fade } from "react-awesome-reveal";

function Info({
    image,
    description,
    heading = "DIFFERENT",
    tagline = "what makes us",
}) {
    return (
        <div className="-mt-18 -mb-14 z-0 overflow-x-hidden">
            <section className="lg:translate-x- xl:translate-x-25 flex flex-col md:flex-row justify-center items-center xl:w-full">
                <div className="w-[80vw] md:w-[45vw] lg:w-[40vw] lg:mr-10">
                    <Fade triggerOnce={true} direction="up" delay={400}>
                        <img
                            src={image}
                            alt=""
                            className="w-[80vw] md:w-[45vw] lg:w-[40vw] h-50 sm:h-75 lg:h-100 object-contain sm:object-cover md:object-contain rounded-3xl"
                        />
                    </Fade>
                </div>
                <div className="w-[80vw] md:-mt-10 md:w-[45vw] md:py-4 font-gilroy">
                    <div>
                        <Fade triggerOnce={true} direction="up" delay={400}>
                            <p className="text-[0.9rem] sm:text-[1.1rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem]">
                                {tagline}
                            </p>
                        </Fade>
                    </div>
                    <div>
                        <Fade triggerOnce={true} direction="up" delay={400}>
                            <h2 className="font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl">
                                {heading}
                            </h2>
                        </Fade>
                    </div>
                    <div>
                        <Fade triggerOnce={true} direction="up" delay={400}>
                            <p className="mt-2 text-[0.9rem] text-justify sm:text-[1.1rem] md:text-[1rem] lg:text-[1.3rem]  lg:pr-10 lg:w-[30vw]">
                                {description}
                            </p>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Info;
