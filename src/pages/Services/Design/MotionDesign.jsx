import "../../../styles/index.css";
import HeroSection from "../../../components/Hero/Hero";
import ContentCard from "../../../components/MainContent/ContentCard";
import Footer from "../../../components/Footer/Footer";

function Design() {
    const content = {
        MotionDesign: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "1",
            },
            Heading: `MOTION DESIGN`,
            Description: `Transform your brand with our motion design services. We blend creative vision with the latest technology to deliver visually engaging content that captivates your audience. From animated logos to explainer videos, our dynamic visuals ensure your message stands out.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        VideoEditing: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "2",
            },
            Heading: `VIDEO EDITING`,
            Description: `Elevate your visual storytelling with our video editing services. We create compelling promotional videos, reels, and ads that effectively communicate your brand's message and resonate with your audience.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        AnimatedLogos: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "3",
            },
            Heading: `ANIMATED LOGOS`,
            Description: `Add a dynamic touch to your branding with our animated logo services. We design eye-catching animated logos that leave a memorable impression and enhance your brand's identity.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        ExplainerVideos: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "4",
            },
            Heading: `EXPLAINER VIDEOS`,
            Description: `Simplify complex ideas with our explainer video services. Using 2D or motion graphics, we create engaging videos that effectively communicate your concepts in a clear and captivating manner.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        EventInvitationVideos: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "5",
            },
            Heading: `EVENT INVITATION VIDEOS`,
            Description: `Make your event invitations stand out with our event invitation video services. We design visually appealing and engaging videos for personal or corporate events, ensuring your invitations are memorable.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        Multimedia: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "6",
            },
            Heading: `MULTIMEDIA`,
            Description: `Boost your online presence with our multimedia services. We produce visually appealing content for social media and ads, helping to increase engagement and visibility for your brand. From GIF creation to promotional videos, our services enhance your digital footprint.`,
            List: {
                Contents: false,
                li: [],
            },
            Button: true,
            Navlinks: "Design",
        },
        GIFCreation: {
            Services: {
                Tagline: "Service",
                indexNeeded: true,
                index: "7",
            },
            Heading: `GIF CREATION`,
            Description: `Our GIF creation services provide visually engaging content for social media and ads, helping to increase your brand's visibility and engagement.`,
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
                buttonGIT={false}
                h1={`Motion Design`}
                p={`Our motion design services bring your brand to life through dynamic visuals. We combine creativity and technology to deliver engaging and memorable motion graphics that capture your audience's attention. Whether it's for social media, advertising, or presentations, our designs ensure your message is conveyed with impact.`}
            />
            {renderContentCard(content.MotionDesign)}
            {renderContentCard(content.VideoEditing)}
            {renderContentCard(content.AnimatedLogos)}
            {renderContentCard(content.ExplainerVideos)}
            {renderContentCard(content.EventInvitationVideos)}
            {renderContentCard(content.Multimedia)}
            {renderContentCard(content.GIFCreation)}
            <Footer />
        </>
    );
}

export default Design;
