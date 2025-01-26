import React from "react";
import ArrowULeftDown from "../../../../public/asstes/icons/ArrowULeftDown.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';


const Rights = (props) => {
    if (!props.rMain) {
        return (
            <>
                <div className="font-gilroy-light translate-y-40 translate-x-15 text-[1.89rem] flex text-[#404040]">
                <FontAwesomeIcon icon={faArrowDownLong} className=" translate-y-[0.9rem] font-extralight text-[1.2rem] " />
                    <span className="ml-2">Scroll to explore</span>
                </div>
            </>
        );
    }
    return (
        <>
            <p className="font-gilroy-light translate-y-40 translate-x-15 text-2xl ">
                © All rights reserved by{" "}
                <span className="font-gilroy font-normal underline">
                    Divine Innovative
                </span>
            </p>
        </>
    );
};

export default Rights;
