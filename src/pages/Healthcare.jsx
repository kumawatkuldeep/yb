import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import WhyChooseUs from "../components/Test/Healthcarecard";
import CompanyPartners from '../components/featureBrand/CompanyPartners';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
import { Link } from "react-router-dom";

function Healthcare() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const handleImageClick = (image) => {
        setCurrentImage(image);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Layout>
            <div className="bg-black text-white py-[130px] px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* Text */}
                    <motion.div
                        className="text-center md:text-left md:w-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                    >
                        <h1 className="text-4xl text-white sm:text-5xl font-bold tracking-tight leading-tight mb-4">
                            Transform Healthcare with Advanced AI Chatbots
                        </h1>

                        <p className="text-lg sm:text-xl mb-8">
                            Enhance patient engagement, automate scheduling and reminders, and optimize feedback collection for superior care outcomes
                        </p>

                        {/* Button for large screens */}
                        <div className="hidden md:flex mt-4">
                            <Link to={"/book-demo"}>
                                <a
                                    href="#"
                                    className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition duration-300 ease-in-out shadow-lg"
                                >
                                    Talk to an expert
                                </a>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="flex justify-center md:justify-end md:w-1/2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                    >
                        <img
                            src="/images/Healthcarebot.webp"
                            alt="Illustration"
                            className="max-w-full h-auto md:max-w-md rounded-md shadow-lg cursor-pointer"
                            onClick={() => handleImageClick("/images/Healthcarebot.webp")} // Open modal on click
                        />
                    </motion.div>

                    {/* Button for small screens */}
                    <motion.div
                        className="flex justify-center w-full mt-8 md:hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                    >
                        <Link to={"/book-demo"}>
                            <a
                                href="#"
                                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-zinc-700 transition duration-300 ease-in-out shadow-lg"
                            >
                                Talk to an expert
                            </a>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <CompanyPartners />

            {/* Modal for Image */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseModal}>
                    <div className="bg-white rounded-lg p-4 max-w-sm" onClick={(e) => e.stopPropagation()}>
                        <img src={currentImage} alt="Modal Content" className="max-w-full h-auto rounded-lg" />
                        <button
                            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <section className="pt-9 flex flex-wrap justify-center bg-white">
                {/* Your existing content */}
            </section>

            {/* Additional Sections */}
            <WhyChooseUs />
            <FrequentlyAskedQuestions />
        </Layout>
    );
}

export default Healthcare;
