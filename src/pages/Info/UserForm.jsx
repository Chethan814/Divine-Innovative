// import React from "react";

import HeroSection from "../../components/Hero/Hero";
import "../../styles/index.css";
import FooterRights from "../../components/Footer/FooterRights";
// import GetInTouch from "../../components/Design/GetInTouch";
import Form from "../../components/Design/GetInTouch";

function UserForm() {
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
                button={false}
                buttonGIT={true}
                h1={`Get in touch`}
                p={<Form />}
                link={`info`}
                // card={false}
            />
            <FooterRights />
        </>
    );
}

export default UserForm;
