// import React from "react";

import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/Hero/Hero";
import "../../styles/index.css";
// import { faL, fas } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
    return (
        <>
            <HeroSection
                main={false}
                button={true}
                buttonGIT={false}
                h1={`PORTFOLIO`}
                p={`A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, 
                    contents and interactions in our solutions. 
                    The insights provided by the creative vision, 
                    paired with the modern technology touch, 
                    render a completely satisfying user experience in every Portfolio solution we offer.`}
            />
            <Footer />
        </>
    );
}

export default Portfolio;
