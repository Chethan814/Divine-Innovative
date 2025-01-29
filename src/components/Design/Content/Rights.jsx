import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const Rights = ({ rMain }) => {
    return (
        <>
            {!rMain ? (
                <div className="font-gilroy-light xl:translate-y-40 translate-x-15 text-[1.4rem] xl:text-[1.89rem] mb-10 flex text-[#404040]">
                    <FontAwesomeIcon
                        icon={faArrowDownLong}
                        className="xl:translate-y-[0.9rem] font-extralight text-[1.2rem]"
                    />
                    <span>Scroll to explore</span>
                </div>
            ) : (
                <div>
                    <p className="font-gilroy-light xl:translate-y-40 xl:translate-x-15 my-5 xl:mt-5 text-center xl:text-2xl">
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
