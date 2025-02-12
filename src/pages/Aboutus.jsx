// import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";
import ContentCard from "../components/MainContent/ContentCard";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";

const renderContentCard = (content) => (
    <ContentCard
        Tagline={content.Services.Tagline}
        indexNeeded={content.Services.indexNeeded}
        index={content.Services.index}
        heading={content.Heading}
        description={content.Description}
        list={content.List.Contents}
        listValue={content.List.li}
        navlinks={content.Navlinks}
        Button={content.Button}
    />
);
function Aboutus() {
    const content = {
        People: {
            Services: {
                Tagline: "Meet our",
                indexNeeded: false,
                index: "1",
            },
            Heading: `People`,
            Description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.`,
            List: {
                Contents: false,
                li: [],
            },
            Navlinks: "Design",
            Button : false,
        },
    };

    return (
        <>
            <HeroSection
                main={false}
                button={true}
                buttonGIT={false}
                link={`Design`}
                h1={`ABOUT US`}
                p={`Founded in 2024, Divine Innovative is a full-service Digital Marketing and Graphic Design agency renowned for building 
                    communities and engaging target audiences in real-time through conversation-based communications. 
                    By seamlessly blending cutting-edge technology, strategic insight, and creative communications, 
                    Divine Innovative offers a unique and unparalleled experience.  `}
            />
            {renderContentCard(content.People)}

            <Info />

            <Footer />
        </>
    );
}

export default Aboutus;
