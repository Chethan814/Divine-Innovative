// import React from "react";

import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/Hero/Hero";
import ContentCard from "../../components/MainContent/ContentCard";
import "../../styles/index.css";
// import { faL, fas } from "@fortawesome/free-solid-svg-icons";

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

function Portfolio() {
    const content = {
        Chethan: {
            Services: {
                Tagline: "Web Developer",
                indexNeeded: false,
                index: "1",
            },
            Heading: `Chethan K R`,
            Description: `I am a multifaceted professional skilled in web development, design, management, and social media handling on LinkedIn and X. I craft projects that beautifully blend technology and art, offering elegant visuals, engaging content, and seamless interactions. My unique creative vision and modern technological approach ensure a captivating user experience in every design solution I provide.`,
            List: {
                Contents: true,
                li: [
                    "Web Interface",
                    "User Experience",
                    "Web Design",
                    "Wireframe",
                    "Prototype",
                    "Development",
                ],
            },
            Navlinks: "Design",
            Button: true,
        },
    };
    return (
        <>
            <HeroSection
                main={false}
                button={true}
                buttonGIT={false}
                h1={`PORTFOLIO`}
                p={`A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, 
                    contents and interactions in our solutions. 
                    The insights provided by the creative vision, 
                    paired with the modern technology touch, 
                    render a completely satisfying user experience in every Portfolio solution we offer.`}
            />
            {renderContentCard(content.Chethan)}
            <Footer />
        </>
    );
}

export default Portfolio;
