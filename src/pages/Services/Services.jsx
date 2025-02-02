// import React from "react";

import HeroSection from "../../components/Hero/Hero";
import "../../styles/index.css";
import Footer from "../../components/Footer/Footer";

function Services() {
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
                buttonGIT={false}
                h1={`SERVICES`}
                p={`A best-in-class mixture of technology and art in our projects captivate you with elegance and style of visuals, 
                    contents and interactions in our solutions. 
                    The insights provided by the creative vision, 
                    paired with the modern technology touch, 
                    render a completely satisfying user experience in every design solution we offer.`}
            />
            <Footer />
        </>
    );
}

export default Services;
