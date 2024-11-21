import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Partners = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (src) => {
        setSelectedImage(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage('');
    };

    return (
        <Layout>
            <div className="bg-black text-white py-[130px] px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        className="text-center md:text-left md:w-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                    >
                        <h1 className="text-4xl text-white sm:text-5xl font-bold tracking-tight leading-tight mb-4">
                            YesBoss Partner program
                        </h1>
                        <p className="text-lg sm:text-xl mb-8">
                            Thousands of brands world over leverage YesBoss conversational
                            engagement platform to engage meaningfully with their customers.
                            Join forces with YesBoss to accelerate growth and drive automation
                            across marketing, commerce, and support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#"
                                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-zinc-700 transition duration-300 ease-in-out shadow-lg"
                            >
                                Become a partner
                            </a>
                            <a
                                href="#"
                                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-zinc-700 transition duration-300 ease-in-out shadow-lg"
                            >
                                Partner Login
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex justify-center md:justify-end md:w-1/2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                    >
                        <LazyLoadImage
                            src="/images/Partners.webp"
                            alt="Illustration"
                            className="max-w-full h-auto md:max-w-md rounded-md shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>

            <section className="marquee-container py-10 bg-gray-100 relative overflow-hidden">
                <div className="glass-effect left"></div>
                <div className="content max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Trusted by These Brands</h1>
                    <p className="text-lg text-gray-700 mb-8">Check out our trusted partners</p>
                    <div className="marquee-wrapper">
                        <div className="marquee">
                            {[
                                "/images/ME_logo.jpeg",
                                "/images/ankitagro_logo.jpg",
                                "/images/Dev Dental Logo.jpeg",
                                "/images/elegance_logo.jpg",
                                "/images/weon_logo.jpg",
                                "/images/Routemobile.jpg",
                                "/images/sinch.png",
                                "/images/sendclean-logo.webp",
                            ].map((src, index) => (
                                <LazyLoadImage
                                    key={index}
                                    src={src}
                                    alt={`Brand Logo ${index + 1}`}
                                    className="brand-logo"
                                    onClick={() => handleImageClick(src)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="glass-effect right"></div>
            </section>

            {/* Popup Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded shadow-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <LazyLoadImage
                            alt="popup"
                            src={selectedImage}
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            )}

            <style jsx>{`
                .marquee-container {
                    position: relative;
                    overflow: hidden;
                }
                .marquee-wrapper {
                    overflow: hidden;
                    white-space: nowrap;
                    width: 100%;
                }
                .marquee {
                    display: flex;
                    animation: marquee 15s linear infinite;
                    gap: 60px;
                }
                .brand-logo {
                    height: 100px;
                    flex-shrink: 0;
                    cursor: pointer; /* Pointer cursor on hover */
                }
                .glass-effect {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 50px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                }
                .glass-effect.left {
                    left: 0;
                }
                .glass-effect.right {
                    right: 0;
                }
                @keyframes marquee {
                    from {
                        transform: translateX(0%);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </Layout>
    );
};

export default Partners;
