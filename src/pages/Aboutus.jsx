// import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";
import ContentCard from "../components/MainContent/ContentCard";
import Footer from "../components/Footer/Footer";

const renderContentCard = (content) => (
    <ContentCard
        Tagline={content.Services.Tagline}
        indexNeeded={content.Services.indexNeeded}
        index={content.Services.index}
        heading={content.Heading}
        description={content.Description}
        list={content.List.Contents}
        listValue={content.List.li}
    />
);
function Aboutus() {
    const content = {
        Design: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `WEB DESIGN`,
            Description: `A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, contents and interactions in our solutions. The insights provided by the creative vision, paired with the modern technology touch, render a completely satisfying user experience in every design solution we offer.`,
            List: {
                Contents: true,
                li: [
                    "Web Interface",
                    "User Experience",
                    "Design System",
                    "Wireframe",
                    "Prototype",
                ],
            },
        },
        VISUAL: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `VISUAL IDENTITY.`,
            Description: `A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, contents and interactions in our solutions. The insights provided by the creative vision, paired with the modern technology touch, render a completely satisfying user experience in every design solution we offer.`,
            List: {
                Contents: true,
                li: [
                    "Logo Designing",
                    "Social media",
                    "Marketing Assets",
                    "Presentations",
                ],
            },
        },
        BANNER: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `BANNER DESIGN`,
            Description: `A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, contents and interactions in our solutions. The insights provided by the creative vision, paired with the modern technology touch, render a completely satisfying user experience in every design solution we offer.`,
            List: {
                Contents: true,
                li: ["Story board", "Hand Sketch", "Moodboard", "Digital art"],
            },
        },
    };

    return (
        <>
            <HeroSection
                main={false}
                button={true}
                buttonGIT={false}
                h1={`ABOUT US`}
                p={`There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don't look even slightly believable. 
                    If you are going to use a passage of Lorem Ipsum, 
                    you need to be sure there isn't anything embarrassing hidden.`}
            />
            {renderContentCard(content.Design)}
            {renderContentCard(content.VISUAL)}
            {renderContentCard(content.BANNER)}
            <Footer />
        </>
    );
}

export default Aboutus;
