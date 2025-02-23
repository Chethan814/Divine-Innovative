// import React from "react";
import "../../styles/index.css";
import HeroSection from "../../components/Hero/Hero";
import ContentCard from "../../components/MainContent/ContentCard";
import Footer from "../../components/Footer/Footer";

function Services() {
    const content = {
        Design: {
            Services: {
                Tagline: "Service",
                indexNeeded: false,
                index: "1",
            },
            Heading: `DESIGN`,
            Description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
            List: {
                Contents: true,
                li: [],
            },
            Button: true,
            Navlinks: "services/design",
        },
        Website: {
            Services: {
                Tagline: "Service",
                indexNeeded: false,
                index: "1",
            },
            Heading: `Website`,
            Description: `Our projects are defined by a masterful combination of technology and creativity, captivating with stunning visuals, engaging content, and fluid interactions. The synergy between innovative vision and modern technology ensures a completely satisfying user experience in every web design and development solution we deliver.`,
            List: {
                Contents: true,
                li: ['Web Design', 'Web Development'],
            },
            Button: true,
            Navlinks: "services/website",
        },
        MANAGEMENT: {
            Services: {
                Tagline: "Service",
                indexNeeded: false,
                index: "1",
            },
            Heading: `MANAGEMENT`,
            Description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
            List: {
                Contents: true,
                li: [],
            },
            Button: true,
            Navlinks: "services/management",
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
            Button={content.Button}
            navlinks={content.Navlinks}
        />
    );
    return (
        <>
            <HeroSection
                main={false}
                button={true}
                buttonGIT={false}
                link={`Design`}
                h1={`SERVICES`}
                p={`A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, 
                    contents and interactions in our solutions. 
                    The insights provided by the creative vision, 
                    paired with the modern technology touch, 
                    render a completely satisfying user experience in every design solution we offer.`}
            />
            {renderContentCard(content.Design)}
            {renderContentCard(content.Website)}
            {renderContentCard(content.MANAGEMENT)}

            <Footer />
        </>
    );
}

export default Services;
