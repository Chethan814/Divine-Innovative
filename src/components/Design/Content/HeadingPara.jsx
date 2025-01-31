import React from "react";

// ${props.hMain ? " text-7xl leading-20 " : " "}

export default function HeadingPara(props) {
    return (
        <>
            <section className="">
                <div>
                    <h1
                        className={`font-gilroy  mt-17 text-center sm:text-left ${
                            props.hMain
                                ? "  text-[2.3rem] xl:text-7xl  xl:leading-20 "
                                : " text-[2.6rem]  xl:text-8xl text-stroke xl:mt-30 "
                        }    `}
                    >
                        {props.heading}
                    </h1>
                </div>
                <div>
                    <p
                        className={` font-gilroy  text-center sm:text-left ${
                            props.pMain
                                ? "  font-normal  text-[1.06rem] xl:text-2xl mt-2 "
                                : " font-light mt-8 text-[1rem] xl:text-[1.69rem] w-[8w] md:w-[34vw]  md:leading-10 "
                        }`}
                    >
                        {props.para}
                    </p>
                </div>
            </section>
        </>
    );
}
