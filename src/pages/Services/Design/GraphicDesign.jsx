import "../../../styles/index.css";
import HeroSection from "../../../components/Hero/Hero";
import ContentCard from "../../../components/MainContent/ContentCard";
import Footer from "../../../components/Footer/Footer";

function Design() {
    const content = {
        Design: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `WEB DESIGN`,
            Description: `We seamlessly blend cutting-edge technology and artistic prowess in our web design projects, ensuring your experience is both visually stunning and interactive. Our creative vision, infused with modern technological elements, guarantees a highly satisfying user journey across all our design solutions.`,
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
            Button: true,
            Navlinks: "Design",
        },
        VISUAL: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `VISUAL IDENTITY.`,
            Description: `Our visual identity services artfully integrate contemporary aesthetics with advanced technological elements to create a harmonious brand presence. Through meticulously crafted visuals, engaging content, and interactive designs, we ensure a captivating and memorable user experience. Our solutions not only reflect your brand’s essence but also elevate it, combining creative insights with cutting-edge technology to deliver exceptional results.`,
            List: {
                Contents: true,
                li: [
                    "Logo Designing",
                    "Social media",
                    "Marketing Assets",
                    "Presentations",
                ],
            },
            Button: true,
            Navlinks: "Design",
        },
        BANNER: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `BANNER DESIGN`,
            Description: `Our banner design services seamlessly blend contemporary visual elements with advanced technological features to create striking and impactful banners. Each design is meticulously crafted to ensure maximum engagement and brand visibility. By integrating creative insights with modern design principles, we deliver banners that not only capture attention but also effectively communicate your brand message and values.`,
            List: {
                Contents: true,
                li: ["Story board", "Hand Sketch", "Moodboard", "Digital art"],
            },
            Button: true,
            Navlinks: "Design",
        },
        Graphic: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `GRAPHIC DESIGN`,
            Description: `Our banner design services seamlessly blend contemporary visual elements with advanced technological features to create striking and impactful banners. Each design is meticulously crafted to ensure maximum engagement and brand visibility. By integrating creative insights with modern design principles, we deliver banners that not only capture attention but also effectively communicate your brand message and values.`,
            List: {
                Contents: true,
                li: ["Story board", "Hand Sketch", "Moodboard", "Digital art"],
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
                buttonGIT={false}
                h1={`DESIGN`}
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

export default Design;
