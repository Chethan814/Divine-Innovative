import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const Rights = ({ rMain }) => {
    return (
        <>
            {!rMain ? (
                <div className="font-gilroy-light  xl:translate-y-40  text-[1.4rem] xl:text-[1.89rem] mb-10 sm:mb-0 sm:mt-4 flex items-center justify-center text-[#404040]  ">
                    <div className="translate-y-[0.01   rem] font-extralight pr-1 text-[1.2rem]">
                        <FontAwesomeIcon
                            icon={faArrowDownLong}
                            
                        />
                    </div>
                    <span className="sm:text-[1.3rem]">Scroll to explore</span>
                </div>
            ) : (
                <div>
                    <p className="font-gilroy-light xl:translate-y-40 xl:translate-x-15 my-5 sm:my-0 sm:mt-26 xl:mt-5 text-center xl:text-2xl">
                        © All rights reserved by 
                        <span className="font-gilroy font-normal underline">
                            Divine Innovative
                        </span>
                    </p>
                </div>
            )}
        </>
    );
};

export default Rights;
