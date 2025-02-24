// import React from "react";

import "../../styles/index.css";
import HeroSection from "../../components/Hero/Hero";
import ContentCard from "../../components/MainContent/ContentCard";
import Footer from "../../components/Footer/Footer";
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

function Packages() {
    const content = {
        Design: {
            Services: {
                Tagline: "Packages 1",
                indexNeeded: false,
                index: "1",
            },
            Heading: `Designing`,
            Description: `Explore our range of design packages, each tailored to your unique needs, blending creativity and functionality to elevate your brand's online presence and ensure your business stands out.`,
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
            Navlinks: "info",
            Button: true,
        },
        Website: {
            Services: {
                Tagline: "Packages 2",
                indexNeeded: false,
                index: "1",
            },
            Heading: `Website`,
            Description: `Explore our website design and development packages, combining creativity and technology to enhance your brand’s online presence and deliver exceptional user experiences tailored to your unique needs.`,
            List: {
                Contents: true,
                li: [
                    "Web Design & Development",
                    
                ],
            },
            Navlinks: "info",
            Button: true,
        },
    };
    return (
        <>
            <HeroSection
                main={false}
                button={true}
                buttonGIT={false}
                h1={`Packages`}
                p={`Our packages seamlessly blend cutting-edge technology and artistic excellence, captivating you with elegant visuals, engaging content, and smooth interactions. The unique insights from our creative vision, paired with modern technological expertise, deliver an entirely satisfying user experience in every solution we provide.`}
            />
            {renderContentCard(content.Design)}
            {renderContentCard(content.Website)}
            <Footer />
        </>
    );
}

export default Packages;
