import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";

function Aboutus() {
    return (
        <>
            {/* <div className="font-[Gilroy]">
                <h1 className="font-[500]">Welcome to My Portfolio</h1>
                <p className="font-[400]">
                    This is a paragraph with Poppins font.
                </p>
            </div> */}
            <HeroSection
                main={false}
                button={true}
                buttonGIT={false}
                h1={`ABOUT US`}
                p={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to b
                    e sure there isn't anything embarrassing hidden.`}
            />
        </>
    );
}

export default Aboutus;
