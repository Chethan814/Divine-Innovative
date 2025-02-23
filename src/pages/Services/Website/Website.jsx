// import React from "react";

import Footer from "../../../components/Footer/Footer";
import HeroSection from "../../../components/Hero/Hero";
import "../../../styles/index.css";

import ContentCard from "../../../components/MainContent/ContentCard";
import Info from "../../../components/Info/Info";
import SwiftRides from '../../../asstes/Project/Chethan/swiftrides.png'
import DMY from '../../../asstes/Project/Chethan/DMY.jpg'

function Website() {
    const content = {
        WebDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `WEB DESIGN`,
            Description: `Our web design services marry aesthetics and functionality to deliver visually stunning and user-friendly websites. Each design is crafted to captivate users with an elegant interface, engaging visuals, and seamless navigation, ensuring an unforgettable user experience.`,
            List: {
                Contents: true,
                li: [
                    "Web Design",
                    "UI & UX Design",
                    "Redesign Website",
                    "Search Engine Optimization (SEO)",
                    "Content Writing"
                    
                ],
            },
            Button: true,
            Navlinks: "info",
        },
        Development: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "2",
            },
            Heading: `WEB Development`,
            Description: `Our web development expertise harnesses the power of modern technology to create robust and scalable web solutions. With a focus on performance, security, and reliability, we deliver cutting-edge applications that meet the demands of today’s digital landscape and exceed user expectations.`,
            List: {
                Contents: true,
                li: [
                    "Web Development",
                    "Domain Manage & Setup",
                    "Hosting",
                    "Web Maintenance",
                ],
            },
            Button: true,
            Navlinks: "info",
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
    const Webdesign_description = `We excel at transforming your ideas, thoughts, and vision into custom web designs that showcase your business and turn prospects into clients. Our dedicated in-house team conducts thorough analyses to craft designs that effectively convey your business's identity, mission, and vision.`
    const WebDev_description = `We excel at transforming your business needs into powerful web solutions. Our dedicated team conducts thorough analyses to develop robust, scalable applications aligned with your business's goals. Leveraging modern technology and best practices, we ensure exceptional performance, security, and user experience.`
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
                buttonGIT={true}
                link={`info`}
                h1={`WebSite`}
                p={`Our projects are defined by a masterful combination of technology and creativity, captivating with stunning visuals, engaging content, and fluid interactions. The synergy between innovative vision and modern technology ensures a completely satisfying user experience in every web design and development solution we deliver.`}
            />
            {renderContentCard(content.WebDesign)}
            <Info description={Webdesign_description} image={SwiftRides} />
            {renderContentCard(content.Development)}
            <Info description={WebDev_description} image={DMY}/>
            <Footer />
        </>
    );
}

export default Website;
