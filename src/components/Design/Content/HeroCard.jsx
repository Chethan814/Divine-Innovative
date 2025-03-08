/* eslint-disable react/prop-types */
// import React from "react";

import logo1 from "/asstes/icons/Identity.png";
import logo2 from "/asstes/icons/CircleWavyCheck.png";

const HeroCarditems = ({ logo, title, description }) => {
    return (
        <>
            <div className="mt-10 border lg:border-0 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left w-70 lg:w-62 p-2 lg:p-0 lg:mx-0  ">
                <img src={logo} alt="" className="w-[3rem] lg:w-10" />
                <h4 className="font-poppins font-light text-2xl lg:text-[1.3rem] mt-4 ">
                    {title}
                </h4>
                <p className="font-poppins font-extralight lg:w-60 xl:w-[15vw] mt-2 text-[0.94rem] lg:text-[0.8rem]">
                    {description}
                </p>
            </div>
        </>
    );
};

export default function HeroCard(props) {

    if (!props.requied){
        return <></>;
    }
    return (
        <>
            <div className=" lg:ml-16 xl:mt-35 hidden lg:block">
                <div className="flex flex-col md:flex-row justify-evenly">
                    <HeroCarditems
                        logo={logo1}
                        title={`Strong Identity`}
                        description={`Grow your exposure with a stunning brand identity`}
                    />
                    <HeroCarditems
                        logo={logo2}
                        title={`Award Winning`}
                        description={`We create the unconventional products and eye catching.`}
                    />
                </div>
            </div>
        </>
    );
}
