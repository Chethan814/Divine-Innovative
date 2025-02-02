// import React from "react";

import HeroSection from "../../components/Hero/Hero";
import "../../styles/index.css";
import Footer from "../../components/Footer/Footer";
import ContentCard from "../../components/MainContent/ContentCard";

function Services() {
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
                h1={`SERVICES`}
                p={`A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, 
                    contents and interactions in our solutions. 
                    The insights provided by the creative vision, 
                    paired with the modern technology touch, 
                    render a completely satisfying user experience in every design solution we offer.`}
            />
            {renderContentCard(content.Design)}
            {renderContentCard(content.VISUAL)}
            {renderContentCard(content.BANNER)}

            <Footer />
        </>
    );
}

export default Services;
