import React, { useState } from 'react';

const faqs = [
    {
        question: "What is YesBoss.ai?",
        answer: "YesBoss.ai is an innovative platform providing end-to-end solutions specifically tailored for hospitals, including patient outreach, acquisition, and management."
    },
    {
        question: "How does YesBoss.ai help in patient acquisition?",
        answer: "YesBoss.ai utilizes automated surveys, integrates with multiple messaging channels, and sends timely alerts to streamline patient acquisition processes, reducing costs by up to 33%."
    },
    {
        question: "What kind of support does YesBoss.ai offer?",
        answer: "YesBoss.ai provides real-time 24/7 support through AI-powered chatbots, ensuring quick resolutions to patients’ queries regardless of time or location."
    },
    {
        question: "Can YesBoss.ai integrate with existing hospital systems?",
        answer: "Yes, YesBoss.ai offers out-of-the-box integrations with leading CRM, ERP, and scheduling platforms for seamless integration and faster deployment."
    },
    {
        question: "How secure is patient information with YesBoss.ai?",
        answer: "YesBoss.ai ensures the security of patient information with 2 Factor Authentication (2FA) to confirm patient identity, maintaining high standards of data protection."
    },
];

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
            className="w-full text-left focus:outline-none"
            onClick={toggleOpen}
        >
            <div className="p-4 flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800">{question}</span>
                <svg
                    className={`w-6 h-6 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </button>
        {isOpen && (
            <div className="p-4 text-gray-600">
                {answer}
            </div>
        )}
    </div>
);

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleFaq(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Faqs;
