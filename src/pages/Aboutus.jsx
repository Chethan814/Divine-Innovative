// import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";
import ContentCard from "../components/MainContent/ContentCard";
import Footer from "../components/Footer/Footer";

function Aboutus() {
    const content = {
        Design: {
            Services: 1,
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
            Services: 2,
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
            Services: 3,
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
            <ContentCard
                index={content.Design.Services}
                heading={content.Design.Heading}
                description={content.Design.Description}
                list={content.Design.List.Contents}
                listValue={content.Design.List.li}
            />
            <ContentCard
                index={content.VISUAL.Services}
                heading={content.VISUAL.Heading}
                description={content.VISUAL.Description}
                list={content.VISUAL.List.Contents}
                listValue={content.VISUAL.List.li}
            />
            <ContentCard
                index={content.BANNER.Services}
                heading={content.BANNER.Heading}
                description={content.BANNER.Description}
                list={content.BANNER.List.Contents}
                listValue={content.BANNER.List.li}
            />
            <Footer/>
        </>
    );
}

export default Aboutus;
