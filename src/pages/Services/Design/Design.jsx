import "../../../styles/index.css";
import HeroSection from "../../../components/Hero/Hero";
import ContentCard from "../../../components/MainContent/ContentCard";
import Footer from "../../../components/Footer/Footer";

function Design() {
    const content = {
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
                li: [
                    "Business Card Design",
                    "Flyers and Brochures",
                    "Social Media Graphics",
                    "Presentation Design",
                ],
            },
            Button: true,
            Navlinks: "Packages/design",
        },
        Motion: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "2",
            },
            Heading: `MOTION DESIGN`,
            Description: `Our motion design services bring your brand to life through dynamic visuals. We combine creativity and technology to deliver engaging and memorable motion graphics that capture your audience's attention. Whether it's for social media, advertising, or presentations, our designs ensure your message is conveyed with impact.`,
            List: {
                Contents: true,
                li: [
                    "Video Editing",
                    "Animated Logos",
                    "GIF Creation",
                    "Explainer Videos",
                ],
            },
            Button: true,
            Navlinks: "Packages/design",
        },
        NicheServices: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "3",
            },
            Heading: `NICHE SERVICES`,
            Description: `Our niche services cater to unique and specific design needs, providing customized solutions that set your brand apart. Whether it's custom QR code design or interactive PDFs, we deliver innovative and personalized services that enhance your brand's functionality and appeal.`,
            List: {
                Contents: true,
                li: [
                    "Custom QR Code Design",
                    "3D Mockups",
                    "Interactive PDFs",
                    "Custom Icon Design",
                ],
            },
            Button: true,
            Navlinks: "Packages/design",
        },
        Print: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "4",
            },
            Heading: `PRINT DESIGN`,
            Description: `Our print design services ensure your brand is well-represented across all physical mediums. From event posters to wedding invitations, we create visually appealing and professionally designed print materials that leave a lasting impression.`,
            List: {
                Contents: true,
                li: [
                    "Event Posters",
                    "Wedding Invitations",
                    "Calendars and Planners",
                    "Stationery Design",
                ],
            },
            Button: true,
            Navlinks: "Packages/design",
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
                h1={`DESIGN`}
                p={`A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, 
                    contents and interactions in our solutions. 
                    The insights provided by the creative vision, 
                    paired with the modern technology touch, 
                    render a completely satisfying user experience in every design solution we offer.`}
            />
            {/* {renderContentCard(content.WebDesign)} */}
            {renderContentCard(content.Graphic)}
            {renderContentCard(content.Motion)}
            {renderContentCard(content.NicheServices)}
            {renderContentCard(content.Print)}
            <Footer />
        </>
    );
}

export default Design;
