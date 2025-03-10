import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/Hero/Hero";
import PricingSection from "../../components/Pricing/Pricing";
import TabButton from "../../components/TabButton/TabButton";
import pricingPlans from "../../components/Pricing/PricingData";

function WebsitePackages() {
    const [selectedTab, setSelectedTab] = useState("Graphic");

    function tabClick(selectedTab) {
        setSelectedTab(selectedTab);
    }

    return (
        <>
            <HeroSection
                main={false}
                button={true}
                buttonGIT={false}
                link={`aboutus`}
                h1={`Development Pricing`}
                p={`We believe in clear, upfront pricing that aligns with the unique scope of your project. Our approach is collaborative, ensuring you receive a design solution that not only meets your objectives but exceeds your expectations. Contact us for a personalized quote.`}
            />

            <section className="mt-20">
                <div className=" w-[80vw] mx-auto flex flex-wrap justify-center items-center ">
                    <TabButton onSelect={() => tabClick("WebDesign")}>
                        Web Design
                    </TabButton>
                    <TabButton onSelect={() => tabClick("Development")}>
                        Web development
                    </TabButton>
                    
                </div>
                <div className="text-center mt-10">
                    Click on one of the Button
                </div>
                <div>
                    <PricingSection Plans={pricingPlans[selectedTab]} />
                </div>
            </section>

            <Footer />
        </>
    );
}

export default WebsitePackages;
