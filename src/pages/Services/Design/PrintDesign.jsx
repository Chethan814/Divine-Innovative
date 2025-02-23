import "../../../styles/index.css";
import HeroSection from "../../../components/Hero/Hero";
import ContentCard from "../../../components/MainContent/ContentCard";
import Footer from "../../../components/Footer/Footer";

function Design() {
    const content = {
        PrintDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `PRINT DESIGN`,
            Description: `Our print design services ensure your brand is well-represented across all physical mediums. From event posters to wedding invitations, we create visually appealing and professionally designed print materials that leave a lasting impression.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        EventPosters: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "2",
            },
            Heading: `EVENT POSTERS`,
            Description: `Our event poster design services produce eye-catching posters for conferences, concerts, and exhibitions, ensuring your events attract the right attention.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        WeddingInvitations: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "3",
            },
            Heading: `WEDDING INVITATIONS`,
            Description: `Our wedding invitation design services create beautifully crafted invitations that set the tone for your special day, making a memorable impression on your guests.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        CalendarsPlanners: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "4",
            },
            Heading: `CALENDARS AND PLANNERS`,
            Description: `Our calendar and planner design services offer functional and aesthetically pleasing designs that help you stay organized while showcasing your brand.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        StationeryDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "5",
            },
            Heading: `STATIONERY DESIGN`,
            Description: `Our stationery design services provide professionally designed letterheads, envelopes, notebooks, and other stationery items that enhance your brand's professional image.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        MagazineLayouts: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "6",
            },
            Heading: `MAGAZINE OR BOOKLET LAYOUTS`,
            Description: `Our magazine and booklet layout design services create visually appealing and well-organized layouts that enhance the readability and impact of your publications.`,
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
                h1={`PRINT DESIGN`}
                link={`info`}
                p={`Our print design services ensure your brand is well-represented across all physical mediums. From event posters to wedding invitations, we create visually appealing and professionally designed print materials that leave a lasting impression.`}
            />
            {renderContentCard(content.PrintDesign)}
            {renderContentCard(content.EventPosters)}
            {renderContentCard(content.WeddingInvitations)}
            {renderContentCard(content.CalendarsPlanners)}
            {renderContentCard(content.StationeryDesign)}
            {renderContentCard(content.MagazineLayouts)}
            <Footer />
        </>
    );
}

export default Design;
