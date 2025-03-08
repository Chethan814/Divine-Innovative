/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const Card_1 = () => {
    return (
        <section className="">
            <div className="container mx-auto py- px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="mt-12 md:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            alt="About Us Image"
                            className="object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            About Us
                        </h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            We excel at transforming your ideas, thoughts, and
                            vision into custom web designs that showcase your
                            business and turn prospects into clients. Our
                            dedicated in-house team conducts thorough analyses
                            to craft designs that effectively convey your
                            business's identity, mission, and vision.
                        </p>
                        <div className="mt-8">
                            <NavLink
                                to="aboutus"
                                className="text-black font-medium"
                            >
                                Learn more about us{" "}
                                <span className="ml-2">&#8594;</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card_1;
