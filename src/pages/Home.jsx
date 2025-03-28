// import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";
import Card_1 from "../components/Cards/Card_1";
import FeaturesSection from "../components/Cards/FeaturesCard";
import ProjectSection from "../components/Cards/Project";
import ReviewsSection from "../components/Testimonial/Reviews";
import CallToAction from "../components/CTA/CallToAction";
import FAQ from "../components/Testimonial/FAQ";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <>
            <HeroSection
                main={true}
                button={true}
                buttonGIT={true}
                h1={`Your partner in creating and growing brands.`}
                p={`We transform your ideas into reality `}
                link={`contact`}
                card={true}
            />
            <Card_1 />
            <FeaturesSection />
            <ProjectSection />
            <ReviewsSection />
            <CallToAction />
            <FAQ />
            <Footer />
        </>
    );
}

export default Home;
