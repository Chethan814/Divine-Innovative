function FAQ() {
    const faqs = [
        {
            question: "How can I create my own Social Media Design ? ",
            answer: "If you don’t have experience as a graphic designer then you can make simple and basic profile picture, post, cover or profile page layout design with ready-made design makers and templates. If you want to create a design that is unique, meaningful and reflects the vision of your business then go with the professional social media design service provider to get the design that can set you apart from the competition and make visitors remember your brand.",
        },
        {
            question:
                "The service I am looking for is not in the list, what should I do?",
            answer: `Not an issue. You can send us an email on divineinnovative8@gmail.com, contact us or can get in touch with customer support via chat, we will create a custom order for you.`,
        },
    ];

    return (
        <div className="space-y-4 my-16 px-16">
            {faqs.map((faq, index) => (
                <details
                    key={index}
                    className="group [&_summary::-webkit-details-marker]:hidden"
                    open={index === 0}
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                        <h2 className="font-medium">{faq.question}</h2>
                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        {faq.answer}
                    </p>
                </details>
            ))}
        </div>
    );
}

export default FAQ;
