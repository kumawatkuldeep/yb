import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Info = () => {
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
        <div className="max-screen py-10 space-y-6">
            <div className="space-y-1.5 text-center py-4">
                <p className="text-sm text-gray-500">Optimize Large-Scale Communication</p>
                <h2 className="capitalize md:text-3xl text-2xl font-semibold font-libreBaskerville">
                    with Efficiency and Precision
                </h2>
            </div>
            <div className="grid md:grid-cols-2 justify-items-center items-center gap-4">
                <LazyLoadImage
                    alt="discussion"
                    width="1000"
                    height="1000"
                    decoding="async"
                    data-nimg="1"
                    className="md:max-w-sm lg:max-w-md border border-gray-300 rounded-md cursor-pointer"
                    src="./images/chatsupport.png"
                    style={{ color: 'transparent' }}
                    onClick={() => handleImageClick('./images/chatsupport.png')}
                />
                <div>
                    {[
                        {
                            title: "Enhance Customer Engagement",
                            description: "Empower automated onboarding with dynamic AI agents across multiple channels for seamless utility.",
                            icon: "https://assets.orufy.com/Like_4bb4c2dc44_ddc53b64f2.svg",
                        },
                        {
                            title: "Growth Engagement",
                            description: "Elevate response rates with WhatsApp, Outperforming Email, SMS, and In-App Messaging.",
                            icon: "https://assets.orufy.com/live_copy_6_3521083154_a89d83f831.png",
                        },
                        {
                            title: "Better Chatbot Support",
                            description: "Boost responsiveness and elevate your reputation for exceptional customer service.",
                            icon: "https://assets.orufy.com/Headset_5cd5516cc4_79b0546ba0.svg",
                        }
                    ].map((feature, index) => (
                        <div key={index} className="max-w-md flex flex-col md:flex-row items-center gap-5 w-full py-6 md:border-b">
                            <div className="rounded-full p-2 bg-[#F3F7FF] w-fit">
                                <LazyLoadImage
                                    alt="featureicon"
                                    width="1000"
                                    height="1000"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 md:w-16 hover:scale-110 transition-transform duration-200 cursor-pointer"
                                    src={feature.icon}
                                    style={{ color: 'transparent' }}
                                    onClick={() => handleImageClick(feature.icon)}
                                />
                            </div>
                            <div className="space-y-1 text-center md:text-start">
                                <h2 className="font-medium text-lg lg:text-xl text-gray-700">{feature.title}</h2>
                                <p className="text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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
                            width="500"
                            height="500"
                            decoding="async"
                            data-nimg="1"
                            src={selectedImage}
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Info;
