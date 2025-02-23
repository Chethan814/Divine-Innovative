import "../../../styles/index.css";
import HeroSection from "../../../components/Hero/Hero";
import ContentCard from "../../../components/MainContent/ContentCard";
import Footer from "../../../components/Footer/Footer";

function Design() {
    const content = {
        LandingPageDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `LANDING PAGE DESIGN`,
            Description: `For marketing campaigns or sales funnels, our landing page design services ensure high conversion rates with visually appealing and strategically structured pages.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        ResponsiveDesignOptimization: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "3",
            },
            Heading: `RESPONSIVE DESIGN OPTIMIZATION`,
            Description: `We optimize your website for mobile, tablet, and desktop devices, ensuring a seamless and consistent user experience across all platforms.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        UIUXDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "4",
            },
            Heading: `UI/UX DESIGN`,
            Description: `Our UI/UX design services include prototypes, wireframes, and user flow analysis to create intuitive and engaging interfaces that enhance user satisfaction.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        RedesignServices: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "5",
            },
            Heading: `REDESIGN SERVICES`,
            Description: `We improve outdated websites with our redesign services, enhancing their aesthetics, functionality, and performance to meet modern standards.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        CustomWordPressThemes: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "6",
            },
            Heading: `CUSTOM WORDPRESS THEMES`,
            Description: `Our custom WordPress themes are tailored to clients' needs, providing unique and functional designs that align with your brand's identity.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        PortfolioWebsiteDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "7",
            },
            Heading: `PORTFOLIO WEBSITE DESIGN`,
            Description: `We design professional portfolio websites for artists, photographers, and other professionals, showcasing their work in a visually appealing and organized manner.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        EcommerceWebsiteDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "8",
            },
            Heading: `E-COMMERCE WEBSITE DESIGN`,
            Description: `Our e-commerce website design services, including platforms like Shopify and WooCommerce, ensure a seamless shopping experience for your customers with visually appealing and user-friendly interfaces.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
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
                buttonGIT={true}
                link={`info`}
                h1={`WEB DESIGN`}
                p={`We seamlessly blend cutting-edge technology and artistic prowess in our web design projects, ensuring your experience is both visually stunning and interactive. Our creative vision, infused with modern technological elements, guarantees a highly satisfying user journey across all our design solutions.`}
            />
            {renderContentCard(content.LandingPageDesign)}
            {renderContentCard(content.PortfolioWebsiteDesign)}
            {renderContentCard(content.ResponsiveDesignOptimization)}
            {renderContentCard(content.UIUXDesign)}
            {renderContentCard(content.RedesignServices)}
            {renderContentCard(content.CustomWordPressThemes)}
            {renderContentCard(content.EcommerceWebsiteDesign)}
            <Footer />
        </>
    );
}

export default Design;
