import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/Hero/Hero";
import PricingSection from "../../components/Pricing/Pricing";
import TabButton from "../../components/TabButton/TabButton";
import pricingPlans from "../../components/Pricing/PricingData";

function DesignPackages() {
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
                link={`info`}
                h1={`Design Pricing`}
                p={`We believe in clear, upfront pricing that aligns with the unique scope of your project. Our approach is collaborative, ensuring you receive a design solution that not only meets your objectives but exceeds your expectations. Contact us for a personalized quote.`}
            />

            <section className="mt-20">
                <div className=" w-[80vw] mx-auto flex flex-wrap justify-center items-center ">
                    <TabButton onSelect={() => tabClick("Graphic")}>
                        Graphic Design
                    </TabButton>
                    <TabButton onSelect={() => tabClick("Print")}>
                        Print Design
                    </TabButton>
                    <TabButton onSelect={() => tabClick("Motion")}>
                        Motion Design
                    </TabButton>
                    <TabButton onSelect={() => tabClick("NicheServices")}>
                        Niche Services
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

export default DesignPackages;
