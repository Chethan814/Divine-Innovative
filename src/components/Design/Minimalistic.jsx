import React from "react";

import Effect from "/asstes/hero-section/effects.png";
import gradient from "/asstes/hero-section/gradient_2.png";
import icon1 from "/asstes/hero-section/shaps/svg/Ornament1.svg";
import icon2 from "/asstes/hero-section/shaps/svg/Ornament2.svg";
import icon3 from "/asstes/hero-section/shaps/svg/Ornament3.svg";
import icon4 from "/asstes/hero-section/shaps/svg/Ornament4.svg";
import icon5 from "/asstes/hero-section/shaps/svg/Ornament5.svg";
import icon6 from "/asstes/hero-section/shaps/svg/Ornament6.svg";
import icon7 from "/asstes/hero-section/shaps/svg/Ornament7.svg";
import icon8 from "/asstes/hero-section/shaps/svg/Ornament8.svg";

export default function Minimalistic(){
    return (
        <>
        <div className="hidden sm:block  sm:w-[45vw] md:w-[24rem] lg:w-[28rem] xl:w-[50vw] 2xl:w-[47rem] sm:h-[80vh]  md:h-auto lg:max-h-none lg:h-[100vh] xl:h-[150vh] md:max-h-[36rem]  2xl:h-[72rem] mx-auto  xl:mx-8 sm:my-10 rounded-4xl sm:-translate-x-3 xl:translate-x-4   " id="Minimalistic-design">
                    <div className="">
                        <div className="absolute">
                            <img
                                src={Effect}
                                alt="effect img"
                                className="sm:w-[45vw] md:w-[24rem] lg:w-[28rem] xl:w-[50vw]  2xl:w-[47rem] sm:h-[80vh]  md:h-auto lg:max-h-none lg:h-[100vh] xl:h-[150vh] md:max-h-[36rem] 2xl:h-[72rem]  rounded-4xl px-[0.1rem] object-cover "
                            />
                            <div className="">
                                <img src={icon1} alt="" className=" absolute bottom-35 sm:-translate-x-12 lg:-translate-x-15  xl:-translate-x-14 2xl:-translate-x-13 sm:translate-y-13 lg:translate-y-0 sm:w-38 lg:w-44 2xl:w-66" />
                                <img src={icon2} alt="" className=" absolute sm:top-20 xl:top-50 right-0 sm:translate-x-6 lg:translate-x-13 xl:translate-x-3 2xl:translate-x-14 sm:w-40 lg:w-56 xl:w-68  2xl:w-85" />
                                <img src={icon3} alt="" className=" absolute sm:top-30 xl:top-60 2xl:top-90 sm:-translate-x-11 xl:-translate-x-19 sm:w-31 lg:w-38 2xl:w-70" />
                                <img src={icon4} alt="" className=" absolute sm:bottom-13 xl:bottom-18 sm:left-15 lg:left-32 xl:left-41 2xl:left-47 sm:w-19 lg:w-25 2xl:w-50" />
                                <img src={icon5} alt="" className=" absolute sm:top-10 xl:top-22 sm:left-22 lg:left-28 xl:left-32 2xl:left-36 sm:w-16 lg:w-22 2xl:w-40" />
                                <img src={icon6} alt="" className=" absolute sm:bottom-53 xl:bottom-99 sm:-right-0 xl:right-0 translate-x-2 2xl:translate-x-4 sm:w-33 lg:w-46 2xl:w-80 " />
                                <img src={icon7} alt="" className=" absolute sm:bottom-41 xl:bottom-72 sm:-right-0 xl:right-0 lg:translate-y-5 2xl:translate-y-5 2xl:translate-x-4 sm:w-31 lg:w-44 2xl:w-80" />
                                <img src={icon8} alt="" className=" absolute sm:bottom-37 lg:bottom-28 xl:bottom-67 sm:-right-0 xl:right-0 translate-x-2 2xl:translate-y-5 2xl:translate-x-4 sm:w-26 lg:w-38 2xl:w-52" />
                            </div>
                        </div>

                        <img
                            src={gradient}
                            alt="gradient image"
                            className="w-[50vw] sm:w-[45vw] md:w-[24rem] lg:w-[28rem] xl:w-[50vw] 2xl:w-[47rem] sm:h-[80vh]  md:h-auto lg:max-h-none lg:h-[100vh] xl:h-[150vh] md:max-h-[36rem] 2xl:h-[72rem]  rounded-4xl"
                        />
                    </div>
                </div>
        </>
    )
}