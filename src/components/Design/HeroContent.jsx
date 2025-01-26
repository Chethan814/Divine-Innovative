import React from "react";
import GradientButton from "./GradientButton";

export default function HeroConetent() {
    return (
        <>
            <div
                className="w-[45vw] p-4 my-10 rounded-4xl translate-y-20 "
                id="hero-content"
            >
                <div className="mt-20 ml-14">
                    <div>
                        <h1 className="font-gilroy-semibold text-7xl leading-20">
                            Your partner increating and growing brands.
                        </h1>
                    </div>
                    <div>
                        <p className="font-gilroy-regula text-3xl mt-6">
                            We transform your ideas into reality
                        </p>
                    </div>
                    <div>
                        <GradientButton />
                    </div>
                </div>
            </div>
        </>
    );
}
