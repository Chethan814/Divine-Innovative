import React from "react";
import Effect from "../public/asstes/hero-section/effects.png";
import gradient from "../public/asstes/hero-section/gradient_2.png";
import icon1 from "../public/asstes/hero-section/shaps/svg/Ornament1.svg";
import icon2 from "../public/asstes/hero-section/shaps/svg/Ornament2.svg";
import icon3 from "../public/asstes/hero-section/shaps/svg/Ornament3.svg";
import icon4 from "../public/asstes/hero-section/shaps/svg/Ornament4.svg";
import icon5 from "../public/asstes/hero-section/shaps/svg/Ornament5.svg";
import icon6 from "../public/asstes/hero-section/shaps/svg/Ornament6.svg";
import icon7 from "../public/asstes/hero-section/shaps/svg/Ornament7.svg";
import icon8 from "../public/asstes/hero-section/shaps/svg/Ornament8.svg";

function App() {
    return (
        <>
            {/* <div className="font-[Gilroy]">
                <h1 className="font-[500]">Welcome to My Portfolio</h1>
                <p className="font-[400]">
                    This is a paragraph with Poppins font.
                </p>
            </div> */}
            <div className=" w-[95vw] mx-auto bg-[#ffffff] flex  justify-center">
                <div className="bg-green-300 w-[50vw] h-[10vh] absolute left-10 top-10 ">
                    <div>
                        <img src="" alt="" />
                        
                    </div>
                    <div></div>
                </div>
                <div className=" w-[45vw] h-[90vh] p-4 mx-8 rounded-4xl ">

                </div>
                <div className="w-[43vw] h-[150vh]  mx-8 my-10 rounded-4xl translate-x-4 p-1 ">
                    <div>
                        <div className="absolute">
                            <img
                                src={Effect}
                                alt="effect img"
                                className="w-[43vw] h-[150vh] rounded-4xl px-[0.1rem] object-cover "
                            />
                            <div className="">
                                <img src={icon1} alt="" className=" absolute bottom-35 -translate-x-14" />
                                <img src={icon2} alt="" className=" absolute top-50 right-0 translate-x-3 w-68" />
                                <img src={icon3} alt="" className=" absolute top-60 -translate-x-19" />
                                <img src={icon4} alt="" className=" absolute bottom-18 left-41" />
                                <img src={icon5} alt="" className=" absolute top-22 left-32" />
                                <img src={icon6} alt="" className=" absolute bottom-99 right-0 translate-x-2" />
                                <img src={icon7} alt="" className=" absolute bottom-72 right-0" />
                                <img src={icon8} alt="" className=" absolute bottom-67 right-0 translate-x-2" />
                            </div>
                        </div>

                        <img
                            src={gradient}
                            alt="gradient image"
                            className="w-full h-[150vh] rounded-4xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
