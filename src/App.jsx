import React from "react";

import HeroSection from "./components/Hero/Hero";
import './styles/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
    return (
        <>
            {/* <div className="font-[Gilroy]">
                <h1 className="font-[500]">Welcome to My Portfolio</h1>
                <p className="font-[400]">
                    This is a paragraph with Poppins font.
                </p>
            </div> */}
            <HeroSection />
        </>
    );
}

export default App;
