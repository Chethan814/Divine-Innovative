import { Link } from "react-router-dom";

function FooterRights() {
    return (
        <div>
            <div className="mt-10  mb-4 w-full  text-[0.9rem]">
                <p className="font-gilroy-light  text-center  ">
                    © All rights reserved by
                    <Link to='/'>
                        <span className="font-gilroy font-normal underline pl-1">
                            Divine Innovative
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default FooterRights;
