import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPenNib, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

let FeaturesList = [
    {
        title: "Design",
        description: `A best-in-class mixture of technology and art in our projects.`,
        link: "/services/design",
        icon: faPenNib,
    },
    {
        title: "Web Development",
        description: `A best-in-class mixture of technology and art in our projects.`,
        link: "/services/website",
        icon: faCode,
    },
    {
        title: "Social Media Handling",
        description: `A best-in-class mixture of technology and art in our projects.`,
        link: "/services/management",
        icon: faHashtag,
    },
];

const FeaturesSection = () => {
    return (
        <section className="py-16 my-16 bg-gray-100 font-gilroy">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Our Services
                </h2>
                <p className="text-gray-600 text-lg mb-12">
                    Discover the amazing features that make our service stand
                    out.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FeaturesList.map((detail, index) => {
                        return (
                            <div key={index}>
                                <Fade
                                    cascade={false}
                                    delay={index * 1000}
                                    direction="up"
                                    triggerOnce={true}
                                >
                                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
                                        <NavLink to={detail.link}>
                                            <div className="text-2xl mb-2">
                                                <FontAwesomeIcon
                                                    icon={detail.icon}
                                                />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                {detail.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {detail.description}
                                            </p>
                                        </NavLink>
                                    </div>
                                </Fade>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
