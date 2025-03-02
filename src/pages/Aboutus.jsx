// import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";
import ContentCard from "../components/MainContent/ContentCard";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";

import SwiftRides from "../asstes/Project/Chethan/swiftrides.png";

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

let Story = (
    <>
        Once upon a time, there was a spark, a spark born from a desire to
        create something extraordinary. At the crossroads of creativity and
        technology, Divine Innovative was born. The name represents a powerful
        vision: <br /> <br />
        <b> Divine </b>: Symbolizing purity, excellence, and the ability to
        create something meaningful and inspiring. Just as divine forces bring
        life into the world, our mission is to breathe life into brands and
        ideas.
        <br />
        <br />
        <b> Innovative </b>: Representing the unending drive to break boundaries
        and reimagine possibilities. In a fast-evolving world, innovation is our
        compass, guiding businesses to stand out and thrive.
        <br /> <br />
        Divine Innovative wasn’t just a company; it was a promise to help
        businesses unlock their true potential. With expertise in:
        <br /> <br />
        {/* <ul>
            <li>
                Graphic Designing – Crafting visuals that speak louder than
                words.
            </li>
            <li>
                Web Development – Building digital homes where brands flourish.
            </li>
            <li>
                Social Media Handling – Amplifying voices in the crowded digital
                space.
            </li>
            <li>
                Content Writing – Weaving stories that resonate with hearts and
                minds.
            </li>
            <li>Video Editing – Turning moments into compelling narratives.</li>
            <li>
                SEO & Email Marketing – Elevating brands to shine at the top.
            </li>
        </ul> */}
    </>
);
function Aboutus() {
    const content = {
        People: {
            Services: {
                Tagline: "Our Story",
                indexNeeded: false,
                index: "1",
            },
            Heading: `Divine Innovative`,
            Description: Story,
            List: {
                Contents: false,
                li: [],
            },
            Navlinks: "Design",
            Button: false,
        },
    };

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

            {renderContentCard(content.People)}

            <Footer />
        </>
    );
}

export default Aboutus;
