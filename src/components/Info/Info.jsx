/* eslint-disable react/prop-types */
// import React from "react";

function Info({ image, description, heading = 'DIFFERENT', tagline = 'what makes us' }) {
    return (
        <div className="-mt-18 -mb-14 z-0">
            <section className="lg:translate-x-5 xl:translate-x-25 flex flex-col md:flex-row justify-center items-center xl:w-full">
                <div className="w-[80vw] md:w-[45vw] lg:w-[50vw] lg:mr-10">
                    <img
                        src={image}
                        alt=""
                        className="w-[80vw] md:w-[45vw] lg:w-[50vw] h-50 sm:h-75 lg:h-100 object-contain sm:object-cover md:object-contain rounded-3xl"
                    />
                </div>
                <div className="w-[80vw] md:-mt-10 md:w-[45vw] md:py-4 font-gilroy">
                    <div>
                        <p className="text-[0.9rem] sm:text-[1.1rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem]">
                            {tagline}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl">
                            {heading}
                        </h2>
                    </div>
                    <div>
                        <p className="mt-2 text-[0.9rem] text-justify sm:text-[1.1rem] md:text-[1rem] lg:text-[1.3rem] md:max-w-[25rem]">
                            {description}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Info;