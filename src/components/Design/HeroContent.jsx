import React from "react";
import GradientButton from "./GradientButton";
import logo1 from "../../../public/asstes/icons/Identity.png"
import logo2 from "../../../public/asstes/icons/CircleWavyCheck.png"

import "../../styles/index.css"

export default function HeroConetent() {
    return (
        <>
            <div
                className="w-[45vw] p-4 my-10 rounded-4xl translate-y-20 "
                id="hero-content"
            >
                <div className="mt-20 ml-14">
                    <div>
                        <div>
                            <h1 className="font-gilroy-semibold text-7xl leading-20">
                                Your partner increating and growing brands.
                            </h1>
                        </div>
                        <div>
                            <p className="font-gilroy-regula text-3xl mt-8">
                                We transform your ideas into reality
                            </p>
                        </div>
                        <div>
                            <GradientButton />
                        </div>
                    </div>
                </div>
                <div className="mt-35">
                    <div className="flex justify-evenly ">
                        <div className=" ">
                            <img src={logo1} alt="" className="w-[3rem]" />
                            <h4 className="font-poppins font-light text-2xl mt-4">Strong logontity</h4>
                            <p className="font-poppins font-extralight w-[15vw] mt-2 text-[0.94rem] ">
                                Grow you exposure with a stunning brand identity
                            </p>
                        </div>
                        <div className=" ">
                            <img src={logo2} alt="" className="w-[3rem]"/>
                            <h4 className="font-poppins font-light text-2xl mt-4">Strong Identity</h4>
                            <p className=" font-poppins font-extralight w-[15vw] mt-2 text-[0.94rem] ">
                                Grow you exposure with a stunning brand identity
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="">
                    <p className="font-gilroy-light translate-y-40 translate-x-15 text-2xl ">
                    © All rights reserved by <span className="font-gilroy font-normal underline">Divine Innovative</span>
                    </p>
                </div>
            </div>
        </>
    );
}
