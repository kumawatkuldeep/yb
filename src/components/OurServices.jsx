import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./OurServices.module.css";

const ServicesSection = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [currentService, setCurrentService] = useState(null);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false); // State for image popup
    const [currentImage, setCurrentImage] = useState(""); // State to hold the current image URL

    const services = [
        {
            title: "Elevate Customer Engagement with Booking Chatbots",
            details: [
                "Boost Customer Engagement: Interact with customers round the clock.",
                "Resolve Issues Quickly: Address customer queries and resolve issues rapidly.",
                "Reflect Your Brand: Customize the chatbot to match your brand’s voice and tone."
            ],
            image: "./images/customerengage.avif",
            layout: "left"
        },
        {
            title: "Supercharge Your Wholesale Business with AI-Powered Communication",
            details: [
                "Break language barriers: Converse with customers worldwide in their preferred language.",
                "Showcase dynamic catalogs: Present your latest offerings directly within WhatsApp.",
                "Provide instant information: Offer easy access to company details like bank details, location, and contacts."
            ],
            image: "./images/wholesale.png",
            layout: "left"
        },
        {
            title: "Elevate Your Engagement with Personalized Customer Interaction",
            details: [
                "Boost Customer Engagement: Interact with customers round the clock.",
                "Resolve Issues Quickly: Address customer queries and resolve issues.",
                "Reflect Your Brand: Customize the chatbot to match your brand’s voice."
            ],
            image: "./images/echat.png",
            layout: "right"
        }
    ];

    const handleClose = () => setShowPopup(false);

    const handleShow = (service) => {
        setCurrentService(service);
        setShowPopup(true);
    };

    const handleImageClick = (image) => {
        setCurrentImage(image);
        setIsImagePopupOpen(true); // Open the image popup
    };

    const handleCloseImagePopup = () => {
        setIsImagePopupOpen(false); // Close the image popup
    };

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {services.map((service, index) => (
                    <div
                        className={`flex flex-col md:flex-row items-center justify-between mb-16 ${service.layout === "left" ? "" : "flex-row-reverse"}`}
                        key={index}
                    >
                        {/* Text Section */}
                        <motion.div
                            className="w-full md:w-1/2 mb-8 md:mb-0"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                {service.title}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
                                {service.details[0]}
                            </p>
                            <button
                                onClick={() => handleShow(service)}
                                className="bg-black text-white border-2 border-black hover:bg-white hover:text-black hover:border-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
                            >
                                Learn More
                            </button>
                        </motion.div>

                        {/* Image Section */}
                        <motion.div
                            className="w-full md:w-1/2 relative md:pl-8"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginRight: "-50px"
                            }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className={`rounded-lg w-full md:w-4/5 shadow-xl hover:scale-105 transition duration-300 ${styles["image-border"]}`}
                                loading="lazy"
                                onClick={() => handleImageClick(service.image)} // Open image popup on click
                            />
                        </motion.div>
                    </div>
                ))}

                {/* Popup for "Learn More" content */}
                {showPopup && currentService && (
                    <div className={styles["popup-overlay"]}>
                        <div className={styles["popup-content"]}>
                            <h2>{currentService.title}</h2>
                            <ul className="list-disc ml-4 mb-9">
                                {currentService.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                            <button className={styles["close-popup"]} onClick={handleClose}>
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* Image Popup */}
                {isImagePopupOpen && (
                    <div className={styles["popup-overlay"]} onClick={handleCloseImagePopup}>
                        <div className={styles["popup-content"]} onClick={(e) => e.stopPropagation()}>
                            <img src={currentImage} alt="Service" className="max-w-full h-auto rounded-lg" />
                            <button className={`${styles["close-popup"]} mt-4`} onClick={handleCloseImagePopup}>
                                Close
                            </button>
                        </div>
                    </div>
                )}


                {/* Footer */}
                
            </div>
        </section>
    );
};

export default ServicesSection;
