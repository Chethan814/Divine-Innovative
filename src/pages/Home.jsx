// import React from "react";

import HeroSection from "../components/Hero/Hero";
import "../styles/index.css";
import Footer from "../components/Footer/Footer";
import Card_1 from "../components/Cards/Card_1";
import FeaturesSection from "../components/Cards/FeaturesCard";
import ReviewsSection from "../components/Testimonial/Reviews";
// import CTASection from "../components/CTA/CTA";
import FAQ from "../components/Testimonial/FAQ";
// import TestimonialSlider from "../components/Testimonials/Testimonials";
// import FeaturedCaseStudy from './../components/Cards/Benefits';
import CallToAction from "../components/CTA/CallToAction";
import ProjectSection from "../components/Cards/Project";

function Home() {
    // const Webdesign_description = `We excel at transforming your ideas, thoughts, and vision into custom web designs that showcase your business and turn prospects into clients. Our dedicated in-house team conducts thorough analyses to craft designs that effectively convey your business's identity, mission, and vision.`;

    return (
        <>
            {/* <div className="font-[Gilroy]">
                <h1 className="font-[500]">Welcome to My Portfolio</h1>
                <p className="font-[400]">
                    This is a paragraph with Poppins font.
                </p>
            </div> */}
            <HeroSection
                main={true}
                button={true}
                buttonGIT={true}
                h1={`Your partner in creating and growing brands.`}
                p={`We transform your ideas into reality `}
                link={`info`}
                card={true}
            />
            <Card_1 />
            <FeaturesSection />
            {/* <FeaturedCaseStudy /> */}
            <ProjectSection />
            <ReviewsSection />
            <CallToAction />
            <FAQ />
            {/* <CTASection /> */}
            {/* <TestimonialSlider /> */}

            <Footer />
        </>
    );
}

export default Home;
