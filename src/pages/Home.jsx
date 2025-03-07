// import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";
import Info from "../components/Info/Info";
import Swift from "../asstes/Project/Chethan/swiftrides.png";
import Footer from "../components/Footer/Footer";
// import PhoneNav from "../components/Nav/PhoneNav";

function Home() {
    const Webdesign_description = `We excel at transforming your ideas, thoughts, and vision into custom web designs that showcase your business and turn prospects into clients. Our dedicated in-house team conducts thorough analyses to craft designs that effectively convey your business's identity, mission, and vision.`;

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
                p={`We transform your ideas into reality `}
                link={`info`}
                card={true}
            />
            {/* <PhoneNav /> */}
            <div className="my-20">
                <Info image={Swift} description={Webdesign_description} />
            </div>
            
            <Footer />
        </>
    );
}

export default Home;
