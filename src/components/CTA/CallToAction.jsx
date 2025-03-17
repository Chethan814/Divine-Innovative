import { NavLink } from "react-router-dom";

const CallToAction = () => {
    return (
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-gilroy">
            <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">
                            Skills to enrich <br className="hidden xl:block" /> your
                        </span>
                        <span className="block text-stroke xl:inline pl-1">
                            online business
                        </span>
                    </h1>
                    <p className="mt-3 text-base  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Boost your online business. Expert digital solutions,
                        tailored for your success. Get started now.
                    </p>
                    {/* Button Section */}
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <NavLink
                                to="/contact"
                                className="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md   md:py-4 md:text-lg md:px-10 bg-gradient-to-r from-[#F8DCE0] via-[#E6E0FE] to-[#F5D6FA]"
                            >
                                Get started
                            </NavLink>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <NavLink
                                to="/aboutus"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  bg-gray-100 md:py-4 md:text-lg md:px-10"
                            >
                                Learn more <span className="ml-2">&#8594;</span>
                            </NavLink>
                        </div>
                    </div>
                    {/* End of Button Section */}
                </div>

                {/* Image Section */}
                <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt=""
                    />
                </div>
                {/* End of Image Section */}
            </div>
        </section>
    );
};

export default CallToAction;
