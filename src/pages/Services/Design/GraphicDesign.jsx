import "../../../styles/index.css";
import HeroSection from "../../../components/Hero/Hero";
import ContentCard from "../../../components/MainContent/ContentCard";
import Footer from "../../../components/Footer/Footer";

function Design() {
    const content = {
        BusinessCardDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `BUSINESS CARD DESIGN`,
            Description: `Our business card design services ensure you make a lasting impression with professionally crafted and visually appealing cards that reflect your brand's identity.`,
            Button: true,
            Navlinks: "Design",
            List: {
                Contents: false,
                li: [],
            },
        },
        FlyersBrochures: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "2",
            },
            Heading: `FLYERS AND BROCHURES`,
            Description: `Our flyer and brochure design services combine creativity and practicality to produce eye-catching and informative materials that effectively convey your message.`,
            Button: true,
            Navlinks: "Design",
            List: {
                Contents: false,
                li: [],
            },
        },
        SocialMediaGraphics: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "3",
            },
            Heading: `SOCIAL MEDIA GRAPHICS`,
            Description: `Our social media graphics services provide engaging and visually stunning content for your social media platforms, enhancing your online presence and audience engagement.`,
            Button: true,
            Navlinks: "Design",
            List: {
                Contents: false,
                li: [],
            },
        },
        PresentationDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `PRESENTATION DESIGN`,
            Description: `Our presentation design services deliver professionally crafted PowerPoint or Google Slides presentations that captivate your audience and effectively communicate your ideas.`,
            Button: true,
            Navlinks: "Design",
            List: {
                Contents: false,
                li: [],
            },
        },
        PackagingDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `PACKAGING DESIGN`,
            Description: `Our packaging design services create visually appealing labels and product packaging that attract customers and reinforce your brand's identity.`,
            Button: true,
            Navlinks: "Design",
            List: {
                Contents: false,
                li: [],
            },
        },
        CustomIllustrations: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `CUSTOM ILLUSTRATIONS`,
            Description: `Our custom illustration services provide unique and creative artwork tailored for branding or merchandise, adding a distinctive touch to your brand.`,
            Button: true,
            Navlinks: "Design",
            List: {
                Contents: false,
                li: [],
            },
        },
        Infographics: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `INFOGRAPHICS`,
            Description: `Our infographic design services transform complex information into visually engaging and easy-to-understand graphics, ideal for blogs, presentations, and social media.`,
            Button: true,
            Navlinks: "Design",
            List: {
                Contents: false,
                li: [],
            },
        },
        BrandIdentityPackages: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `BRAND IDENTITY PACKAGES`,
            Description: `Our brand identity packages encompass logo design, color palettes, typography, and brand guidelines to ensure a cohesive and strong visual representation of your brand.`,
            Button: true,
            Navlinks: "Design",
            List: {
                Contents: false,
                li: [],
            },
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
                link={'info'}
                h1={`GRAPHIC DESIGN`}
                p={`Our banner design services seamlessly blend contemporary visual elements with advanced technological features to create striking and impactful banners. Each design is meticulously crafted to ensure maximum engagement and brand visibility. By integrating creative insights with modern design principles, we deliver banners that not only capture attention but also effectively communicate your brand message and values.`}
            />
            {renderContentCard(content.BusinessCardDesign)}
            {renderContentCard(content.FlyersBrochures)}
            {renderContentCard(content.SocialMediaGraphics)}
            {renderContentCard(content.PresentationDesign)}
            {renderContentCard(content.PackagingDesign)}
            {renderContentCard(content.CustomIllustrations)}
            {renderContentCard(content.Infographics)}
            {renderContentCard(content.BrandIdentityPackages)}

            <Footer />
        </>
    );
}

export default Design;
