/* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const ReviewCard = ({ name, review, rating , index }) => {
    return (
        <Fade direction="up" cascade={false} delay={index * 500} triggerOnce={false}>
            <div className="h-full">
                <blockquote className="flex flex-col justify-between bg-white h-full p-6 shadow-md sm:p-8 rounded-lg">
                    <div>
                        <div className="flex gap-1 text-[#E484CB]">
                            {[...Array(rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="size-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        <div className="mt-4">
                            <p className="text-xl font-bold text-black">
                                {name}
                            </p>
                            <p className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                                {review}
                            </p>
                        </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; {name}
                    </footer>
                </blockquote>
            </div>
        </Fade>
    );
};

const ReviewsSection = () => {
    const reviews = [
        {
            name: " Sarah M.",
            review: "Our website traffic doubled after the redesign! The new site is sleek, user-friendly, and perfectly represents our brand.",
            rating: 5,
        },
        {
            name: "Pam Beesly",
            review: "The team's expertise in web development is unmatched. They built a custom website that perfectly met our needs and exceeded our expectations.",
            rating: 4,
        },
        {
            name: "Jim Halpert",
            review: "We're thrilled with the results of our social media campaign. [Your Agency Name] helped us build a strong online community and connect with our target audience.",
            rating: 5,
        },
    ];

    return (
        <section className="bg-gray-50 ">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 md:w-[90vw]">
                <div className="md:flex md:items-end md:justify-between">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Read trusted reviews from our customers
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                            See what our customers have to say about our
                            services.
                        </p>
                    </div>

                    {/* <NavLink
                        to="/reviews"
                        className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
                    >
                        <span className="font-medium"> Read all reviews </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 rtl:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </NavLink> */}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} index={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
