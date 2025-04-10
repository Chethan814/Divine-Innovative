/* eslint-disable react/no-unescaped-entities */
import ContactNav from "../../components/contact/ContectNav";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const GetInTouchForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const FormLabels = [
        {
            label: "You name",
            type: "text",
            object: "Name",
        },
        {
            label: "Email address",
            type: "email",
            object: "Email",
        },
        {
            label: "Phone number",
            type: "tel",
            object: "Phone",
        },
        {
            label: "Company name",
            type: "text",
            object: "Company",
        },
        {
            label: "Message",
            type: "text",
            object: "message",
        },
    ];

    const onSubmit = (data) => {
        const serviceID = "service_lze38j8";
        const templateID = "template_mbx68ut";
        const publicKey = "qbzaNnsvbWW07Z_4h";

        emailjs
            .send(serviceID, templateID, data, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert("Message Sent Successfully!");
                reset(); // Reset form after submission
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Failed to send message.");
            });
    };
    return (
        <>
            <ContactNav />

            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Let's Chat About Your Digital Marketing Needs!
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
                            We're passionate about helping businesses like yours
                            thrive online. Reach out and let's discuss how we
                            can create a winning digital strategy for your
                            brand.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                            {[
                                {
                                    icon: (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    ),
                                    content: [
                                        "+1-316-555-0116",
                                        "+1-446-526-0117",
                                    ],
                                },
                                {
                                    icon: (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    ),
                                    content: [
                                        "divineinnovative8@gmail.com",
                                        "ruthvikshruthvik@gmail.com",
                                    ],
                                },
                                {
                                    icon: (
                                        <>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </>
                                    ),
                                    content: [
                                        "8502 Preston Rd. Ingle, Maine 98380, USA",
                                    ],
                                },
                            ].map(({ icon, content }, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden bg-white rounded-xl"
                                >
                                    <div className="p-6">
                                        <svg
                                            className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            {icon}
                                        </svg>
                                        {content.map((text, i) => (
                                            <p
                                                key={i}
                                                className="mt-6 text-lg font-medium text-gray-900"
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 overflow-hidden bg-white rounded-xl">
                            <div className="px-6 py-12 sm:p-12">
                                <h3 className="text-3xl font-semibold text-center text-gray-900">
                                    Send us a message
                                </h3>
                                <form
                                    className="mt-14"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        {FormLabels.map(
                                            ({ label, object }, index) => (
                                                <div key={index}>
                                                    <label className="text-base font-medium text-gray-900">
                                                        {label}
                                                    </label>
                                                    <div className="mt-2.5 relative">
                                                        <input
                                                            {...register(
                                                                object,
                                                                {
                                                                    required: `${object} is required`,
                                                                }
                                                            )}
                                                            placeholder={`Enter your ${label.toLowerCase()}`}
                                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                        />
                                                        
                                                    </div>
                                                </div>
                                            )
                                        )}
                                        
                                        <div className="sm:col-span-2">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GetInTouchForm;
