/* eslint-disable react/prop-types */
// import React from "react";

export default function HeadingPara({ heading, para, hMain = false, pMain = false }) {
    return (
        <section className="md:w-full">
            <div>
                <h1
                    className={`font-gilroy-semibold mt-17 xl:mt-0 text-center sm:text-left md:max-w-80 lg:max-w-110 xl:max-w-140 xl:w-140 ${
                        hMain
                            ? "text-[2.3rem] lg:text-5xl xl:text-7xl lg:leading-14 xl:leading-20 xl:w-[47vw]"
                            : "text-[2.6rem] md:text-6xl xl:text-8xl text-stroke"
                    }`}
                >
                    {heading}
                </h1>
            </div>
            <div>
                <p
                    className={`font-gilroy text-center sm:text-left xl:max-w-140 ${
                        pMain
                            ? "font-normal text-[1.06rem] lg:text-[1.4rem] xl:text-2xl mt-2 lg:mt-4"
                            : "font-light mt-8 text-[1rem] xl:text-[1.69rem] w-[8w] md:w-[34vw] md:leading-7 xl:leading-10"
                    }`}
                >
                    {para}
                </p>
            </div>
        </section>
    );
}