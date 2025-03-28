import DMY from "../../asstes/Project/Chethan/DMY.jpg";
import { Fade } from "react-awesome-reveal";

const ProjectSection = () => {
    return (
        <section className="w-full mx-auto py-10 bg-gray-50">
            {/* Title */}
            <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-[#f34bf9] dark:border-b-2 sm:translate-x-10 xl:translate-x-30">
                Projects
            </div>

            <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
                {/* Col - 2 */}
                <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
                    <div className="md:w-[50%] w-full">
                        <Fade triggerOnce={true} direction="left" delay={1000}>
                            <img
                                className="w-full md:rounded-t-lg rounded-sm"
                                src="https://images.unsplash.com/photo-1534271057238-c2c170a76672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="billboard image"
                            />
                        </Fade>
                    </div>
                    <div className="md:w-[50%] w-full bg-gray-100 dark:text-gray-400 md:p-4 p-0 rounded-md">
                        <h2 className="text-3xl font-semibold text-gray-900">
                            Design
                        </h2>
                        <p className="text-md mt-4">
                            A best-in-class mixture of technology and art in our
                            projects captivate you with elegance and style of
                            visuals, contents and interactions in our solutions.
                            The insights provided by the creative vision, paired
                            with the modern technology touch, render a
                            completely satisfying user experience in every
                            design solution we offer.
                        </p>
                    </div>
                </div>
                {/* Col - 3 */}
                <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
                    <div className="md:w-[50%] w-full bg-gray-100 dark:text-gray-400 md:p-4 p-0 rounded-md">
                        <h2 className="text-3xl font-semibold text-gray-900">
                            Web Development
                        </h2>
                        <p className="text-md mt-4">
                            Our projects are defined by a masterful combination
                            of technology and creativity, captivating with
                            stunning visuals, engaging content, and fluid
                            interactions. The synergy between innovative vision
                            and modern technology ensures a completely
                            satisfying user experience in every web design and
                            development solution we deliver.
                        </p>
                    </div>
                    <div className="md:w-[50%] w-full">
                        <Fade triggerOnce={true} direction="right" delay={1000}>
                            <img
                                className="w-full md:rounded-t-lg rounded-sm"
                                src={DMY}
                                alt="billboard image"
                            />
                        </Fade>
                    </div>
                </div>
                <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
                    <div className="md:w-[50%] w-full">
                        <Fade triggerOnce={true} direction="left" delay={1000}>
                            <img
                                className="w-full md:rounded-t-lg rounded-sm"
                                src="https://images.unsplash.com/photo-1468649437954-f86751c119b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="billboard image"
                            />
                        </Fade>
                    </div>
                    <div className="md:w-[50%] w-full bg-gray-100 dark:text-gray-400 md:p-4 p-0 rounded-md">
                        <h2 className="text-3xl font-semibold text-gray-900">
                            Social Media Management
                        </h2>
                        <p className="text-md mt-4">
                            We craft digital experiences that amaze. Expect
                            stunning visuals, engaging content, and seamless
                            interactions in every web project. Follow us to see
                            how we blend technology and creativity for a truly
                            captivating online presence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
