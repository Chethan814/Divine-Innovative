/* eslint-disable react/prop-types */
// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const Rights = () => {
    return (
        <>
            <div className="mt-10 sm:my-0 ">
            <div className="font-gilroy-light  xl:translate-y-20  text-[1.4rem] xl:text-[1.89rem] mb-5 sm:mb-0 sm:mt-4 flex items-center justify-center lg:justify-start text-[#404040]  ">
                        <div className="translate-y-[0.01rem] font-extralight pr-1 text-[1.2rem]">
                            <FontAwesomeIcon icon={faArrowDownLong} />
                        </div>
                        <span className="sm:text-[1.3rem]">
                            Scroll to explore
                        </span>
                    </div>
            </div>
        </>
    );
};

export default Rights;
