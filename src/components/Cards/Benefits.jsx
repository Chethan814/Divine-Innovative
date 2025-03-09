import { NavLink } from "react-router-dom";

const FeaturedCaseStudy = () => {
    return (
        <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
            {/* Themes: blue, purple, and teal */}
            <div data-theme="teal" className="mx-auto max-w-6xl">
                <h2 className="sr-only">Featured case study</h2>
                <section className="font-sans text-black">
                    <div className="lg:flex lg:items-center fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right">
                        {/* Image Section */}
                        <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                            <div className="h-full">
                                <article className="h-full">
                                    <div className="h-full">
                                        <img
                                            className="h-full object-cover"
                                            src="https://images.unsplash.com/photo-1540760938999-077b8231d890?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            width="733"
                                            height="412"
                                            alt="CXcon Experience Transformation"
                                        />
                                    </div>
                                </article>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 bg-[#fce2fd]">
                            <div className="leading-relaxed">
                                <h2 className="leading-tight text-4xl font-bold">
                                    Collaborate. Innovate. Grow. With Divine
                                    Innovative.
                                </h2>
                                <p className="mt-4">
                                    We bring together thought leaders and
                                    practitioners to deliver exceptional digital
                                    experiences. Join us to explore the
                                    possibilities of design, development, and
                                    strategic management, all tailored to drive
                                    your business growth.
                                </p>
                                <p className="mt-4">
                                    We believe in a partnership approach,
                                    working closely with you to understand your
                                    unique needs and challenges. Our integrated
                                    services in design, development, and
                                    management are designed to deliver
                                    measurable results, ensuring your digital
                                    investments translate into tangible success.
                                </p>
                                <p className="mt-4">
                                    <NavLink
                                        className="inline-block px-5 py-3 mt-4 text-black font-semibold  rounded-md transition bg-[#fa4e71]"
                                        to="aboutus"
                                    >
                                        See Our Case Studies
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FeaturedCaseStudy;
