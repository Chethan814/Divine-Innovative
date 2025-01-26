import React from "react";
import NavBar from "../Nav/NavBar";
import HeroConetent from "../Design/HeroContent";
import Minimalistic from "../Design/Minimalistic";


export default function HeroSection(){
    return (
        <>
        <div className="w-[95vw] mx-auto bg-[#ffffff] flex  justify-center">
               <NavBar/>
               <HeroConetent />
               <Minimalistic />
            </div>
        </>
    )
}