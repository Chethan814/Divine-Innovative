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
        <div className="hidden sm:block xl:w-[43vw] 2xl:w-[47rem] xl:h-[150vh] 2xl:h-[72rem]  xl:mx-8 xl:my-10 rounded-4xl translate-x-4 p-1  " id="Minimalistic-design">
                    <div>
                        <div className="absolute">
                            <img
                                src={Effect}
                                alt="effect img"
                                className="w-[43vw] 2xl:w-[47rem] xl:h-[150vh] 2xl:h-[72rem]  rounded-4xl px-[0.1rem] object-cover "
                            />
                            <div className="">
                                <img src={icon1} alt="" className=" absolute bottom-35 -translate-x-14 2xl:-translate-x-13 2xl:w-66" />
                                <img src={icon2} alt="" className=" absolute top-50 right-0 translate-x-3 2xl:translate-x-14 xl:w-68 2xl:w-85" />
                                <img src={icon3} alt="" className=" absolute top-60 2xl:top-90 -translate-x-19 2xl:w-70" />
                                <img src={icon4} alt="" className=" absolute bottom-18 left-41 2xl:left-47 2xl:w-50" />
                                <img src={icon5} alt="" className=" absolute top-22 left-32 2xl:left-36 2xl:w-40" />
                                <img src={icon6} alt="" className=" absolute bottom-99 right-0 translate-x-2 2xl:translate-x-4 2xl:w-80 " />
                                <img src={icon7} alt="" className=" absolute bottom-72 right-0 2xl:translate-y-5 2xl:translate-x-4 2xl:w-80" />
                                <img src={icon8} alt="" className=" absolute bottom-67 right-0 translate-x-2 2xl:translate-y-5 2xl:translate-x-4 2xl:w-52" />
                            </div>
                        </div>

                        <img
                            src={gradient}
                            alt="gradient image"
                            className="w-[43vw] 2xl:w-[47rem] xl:h-[150vh] 2xl:h-[72rem]  rounded-4xl"
                        />
                    </div>
                </div>
        </>
    )
}