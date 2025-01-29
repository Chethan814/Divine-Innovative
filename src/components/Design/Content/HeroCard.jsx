import React from "react";

import logo1 from "/asstes/icons/Identity.png";
import logo2 from "/asstes/icons/CircleWavyCheck.png";

const HeroCarditems = ({ logo, title, description }) => {
    return (
        <>
            <div>
                <img src={logo} alt="" className="w-[3rem]" />
                <h4 className="font-poppins font-light text-2xl mt-4">
                    {title}
                </h4>
                <p className="font-poppins font-extralight w-[15vw] mt-2 text-[0.94rem]">
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
            <div className="xl:mt-35">
                <div className="flex justify-evenly">
                    <HeroCarditems
                        logo={logo1}
                        title={`Strong Identity`}
                        description={`Grow your exposure with a stunning brand identity`}
                    />
                    <HeroCarditems
                        logo={logo2}
                        title={`Award Winning`}
                        description={`We create the unconventionalproducts and eye catching.`}
                    />
                </div>
            </div>
        </>
    );
}
