// import React from "react";

import Footer from "../../../components/Footer/Footer";
import HeroSection from "../../../components/Hero/Hero";
import "../../../styles/index.css";
import ContentCard from "../../../components/MainContent/ContentCard";

function Management() {
    const content = {
        DigitalMarketingAddons: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `DIGITAL MARKETING ADD-ONS`,
            Description: `Enhance your digital marketing efforts with our add-on services. From social media management to SEO services, our comprehensive solutions are designed to maximize your online presence and drive results.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Packages",
        },
        SocialMediaManagement: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "2",
            },
            Heading: `SOCIAL MEDIA MANAGEMENT`,
            Description: `Our social media management services include posting schedules, engagement, and analytics to help you build a strong and active social media presence.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Packages",
        },
        SEOServices: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "3",
            },
            Heading: `SEO SERVICES`,
            Description: `Our SEO services encompass keyword research, on-page, and off-page optimization to improve your website's search engine ranking and visibility.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Packages",
        },
        AdDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "4",
            },
            Heading: `AD DESIGN`,
            Description: `Our ad design services create visually appealing banner ads, social media ads, and Google Ads creatives that capture attention and drive conversions.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Packages",
        },
        EmailMarketingTemplates: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "5",
            },
            Heading: `EMAIL MARKETING TEMPLATES`,
            Description: `Our email marketing template services provide professionally designed templates for newsletters or promotional campaigns, helping you communicate effectively with your audience.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Packages",
        },
        BlogSetupContentWriting: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "6",
            },
            Heading: `BLOG SETUP AND CONTENT WRITING`,
            Description: `Our blog setup and content writing services create engaging and informative content for your website, enhancing your online presence and attracting more visitors.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Packages",
        },
        MarketingAdvisor: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "7",
            },
            Heading: `MARKETING ADVISOR`,
            Description: `Our marketing advisor services provide expert guidance and strategic insights to help you navigate the complexities of digital marketing and achieve your business goals.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Packages",
        },
        ManagementServices: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "8",
            },
            Heading: `MANAGEMENT SERVICES`,
            Description: `Our management services offer comprehensive support for your digital marketing campaigns, ensuring efficient execution and optimal results.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Packages",
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
                main={true}
                button={true}
                buttonGIT={true}
                h1={`MANAGEMENT`}
                p={`A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, 
                    contents and interactions in our solutions. 
                    The insights provided by the creative vision, 
                    paired with the modern technology touch, 
                    render a completely satisfying user experience in every design solution we offer.`}
            />
            {renderContentCard(content.DigitalMarketingAddons)}
            {renderContentCard(content.SocialMediaManagement)}
            {renderContentCard(content.SEOServices)}
            {renderContentCard(content.AdDesign)}
            {renderContentCard(content.EmailMarketingTemplates)}
            {renderContentCard(content.BlogSetupContentWriting)}
            {renderContentCard(content.MarketingAdvisor)}
            {renderContentCard(content.ManagementServices)}
            <Footer />
        </>
    );
}

export default Management;
