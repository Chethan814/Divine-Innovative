import "../../../styles/index.css";
import HeroSection from "../../../components/Hero/Hero";
import ContentCard from "../../../components/MainContent/ContentCard";
import Footer from "../../../components/Footer/Footer";

function Design() {
    const content = {
        NicheServices: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `NICHE SERVICES`,
            Description: `Our niche services cater to unique and specific design needs, providing customized solutions that set your brand apart. From custom QR codes to interactive PDFs, we deliver innovative and personalized services that enhance your brand's functionality and appeal.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        CustomQRCodeDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "2",
            },
            Heading: `CUSTOM QR CODE DESIGN`,
            Description: `Our custom QR code design services create branded QR codes for websites or apps, offering a unique and recognizable touch to your digital presence.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        Mockups: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "3",
            },
            Heading: `3D MOCKUPS`,
            Description: `Our 3D mockup services provide realistic product packaging and digital display designs, helping you visualize and present your concepts effectively.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        InteractivePDFs: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "4",
            },
            Heading: `INTERACTIVE PDFs`,
            Description: `Our interactive PDF services create engaging forms, guides, and presentations that enhance user experience and functionality.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        CustomIconDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "5",
            },
            Heading: `CUSTOM ICON DESIGN`,
            Description: `Our custom icon design services create unique icons for apps or websites, adding a distinctive and cohesive visual element to your brand.`,
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
                h1={`NICHE SERVICES`}
                p={`Our niche services cater to unique and specific design needs, providing customized solutions that set your brand apart. Whether it's custom QR code design or interactive PDFs, we deliver innovative and personalized services that enhance your brand's functionality and appeal.`}
            />
            {renderContentCard(content.NicheServices)}
            {renderContentCard(content.CustomQRCodeDesign)}
            {renderContentCard(content.Mockups)}
            {renderContentCard(content.InteractivePDFs)}
            {renderContentCard(content.CustomIconDesign)}
            <Footer />
        </>
    );
}

export default Design;
