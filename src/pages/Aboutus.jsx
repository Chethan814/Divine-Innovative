// import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";
// import ContentCard from "../components/MainContent/ContentCard";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";

import SwiftRides from "../asstes/Project/Chethan/swiftrides.png";
import FeaturesSection from './../components/Cards/FeaturesCard';
import CTASection from "../components/CTA/CTA";

// const renderContentCard = (content) => (
//     <ContentCard
//         Tagline={content.Services.Tagline}
//         indexNeeded={content.Services.indexNeeded}
//         index={content.Services.index}
//         heading={content.Heading}
//         description={content.Description}
//         list={content.List.Contents}
//         listValue={content.List.li}
//         navlinks={content.Navlinks}
//         Button={content.Button}
//     />
// );


function Aboutus() {
    // const content = {
    //     People: {
    //         Services: {
    //             Tagline: "Our Story",
    //             indexNeeded: false,
    //             index: "1",
    //         },
    //         Heading: `Divine Innovative`,
    //         Description: Story,
    //         List: {
    //             Contents: false,
    //             li: [],
    //         },
    //         Navlinks: "Design",
    //         Button: false,
    //     },
    // };

    const Webdesign_description = `We excel at transforming your ideas, thoughts, and vision into custom web designs that showcase your business and turn prospects into clients. Our dedicated in-house team conducts thorough analyses to craft designs that effectively convey your business's identity, mission, and vision.`;

    return (
        <>
            <HeroSection
                main={false}
                button={true}
                buttonGIT={false}
                link={`info`}
                h1={`ABOUT US`}
                p={`Founded in 2024, Divine Innovative is a full-service Digital Marketing and Graphic Design agency renowned for building 
                    communities and engaging target audiences in real-time through conversation-based communications. 
                    By seamlessly blending cutting-edge technology, strategic insight, and creative communications, 
                    Divine Innovative offers a unique and unparalleled experience.  `}
            />
            <div className="mt-20">
                <Info image={SwiftRides} description={Webdesign_description}  />
            </div>
            <FeaturesSection />
            <CTASection />

            

            <Footer />
        </>
    );
}

export default Aboutus;
