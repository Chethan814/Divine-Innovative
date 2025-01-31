import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";

function Home() {
    return (
        <>
            {/* <div className="font-[Gilroy]">
                <h1 className="font-[500]">Welcome to My Portfolio</h1>
                <p className="font-[400]">
                    This is a paragraph with Poppins font.
                </p>
            </div> */}
            <HeroSection
                main={true}
                button={true}
                buttonGIT={true}
                h1={`Your partner in creating and growing brands.`}
                p={`We transform your ideas into reality`}
            />
        </>
    );
}

export default Home;
