import React from "react";

// ${props.hMain ? " text-7xl leading-20 " : " "}

export default function HeadingPara(props) {
    return (
        <>
            <div>
                <h1 className={` ${props.hMain ? " font-gilroy-semibold text-7xl leading-20 "  : " font-gilroy font-bold text-8xl text-stroke mt-30 "}    `}  >
                    {props.heading}
                </h1>
            </div>
            <div>
                <p className={` font-gilroy  ${props.pMain ? "  font-normal text-2xl mt-8 " : " font-light mt-8 text-[1.69rem] w-[34vw] leading-10 "}`}>
                    {props.para}
                </p>
            </div>
        </>
    );
}
