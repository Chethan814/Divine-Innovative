/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/index.css";
import GradientButton from "../Design/Content/GradientButton";
import { Fade } from "react-awesome-reveal";

function List({ listValues, Contents }) {
    return !Contents ? (
        <ul className="list-disc ml-4 sm:ml-5 mt-5 sm:mt-6 sm:text-[1rem]">
            {listValues.map((value, index) => (
                <li key={index} className="my-2">
                    {value}
                </li>
            ))}
        </ul>
    ) : null;
}

// sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-pink-400 2xl:bg-amber-400

function ContentCard({
    Tagline,
    indexNeeded,
    index,
    heading,
    description,
    Contents,
    listValue,
    navlinks,
    Button,
}) {
    return (
        <section className="w-[80vw] sm:w-[90vw] xl:w-[80vw] mx-auto my-20 p-2 ">
            <Fade  delay={600} triggerOnce={true} direction="down">
                <div className="text-[0.8rem] pb-1">
                    {Tagline} {indexNeeded ? `0${index}` : ""}
                </div>
            </Fade>
            <Fade  delay={600} triggerOnce={true} direction="up">
                <div className="font-gilroy text-4xl sm:text-5xl max-w-[35rem]">
                    <h2>{heading}</h2>
                </div>
            </Fade>
            <Fade  delay={600} triggerOnce={true} direction="up">
                <div className="text-[0.9rem] sm:text-[1rem] text-left w-70 sm:w-75 md:w-[20rem] my-1 sm:mt-8">
                    <p>{description}</p>
                </div>
            </Fade>
            <Fade  delay={600} triggerOnce={true} direction="up">
                <div>
                    <List Contents={Contents} listValues={listValue} />
                </div>
            </Fade>
            <Fade  delay={600} triggerOnce={true} direction="up">
                <div className="lg:-translate-x-6 xl:translate-x-0">
                    <GradientButton
                        button={Button}
                        GIT={false}
                        navlinks={navlinks}
                    />
                </div>
            </Fade>
        </section>
    );
}

export default ContentCard;
