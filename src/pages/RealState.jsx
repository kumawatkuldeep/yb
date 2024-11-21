/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import WhyChooseUs from "../components/Test/Healthcarecard";
import CompanyPartners from "../components/featureBrand/CompanyPartners";
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom'

function RealState() {
    const features = [
        {
            title: "Enhanced Communication",
            description: "Instant, round-the-clock responses to client inquiries",
            imgSrc:
                "https://www.gratifi.com/wp-content/uploads/2023/07/shutterstock_2113170026.jpg",
        },
        {
            title: "Increased Efficiency",
            description: "Automate routine tasks and focus on closing deals",
            imgSrc:
                "https://www.seekpng.com/png/detail/970-9705304_growth-png-increase-efficiency-icon.png"
        },
        {
            title: "Multilingual Support",
            description: "Cater to a diverse client base with ease",
            imgSrc:
                "https://5.imimg.com/data5/SELLER/Default/2021/8/LC/AN/IB/478541/multilingual-support-500x500.jpg",
        },
        {
            title: "Effective Marketing",
            description: " Enhanced resource management and workflow optimization.",
            imgSrc:
                "https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/shutterstock_522186031.jpg",
        },
        // {
        //     title: "Enable remote diagnosis",
        //     description: "Enable remote interactions that make it easy for patients to quickly get care via images, video and audio clips",
        //     imgSrc: "https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/productListCard-5.webp"
        // },
        // {
        //     title: "Deploy in 4 weeks",
        //     description: "OOTB integrations with leading CRM, ERP and scheduling platforms for faster go-to market",
        //     imgSrc: "https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/productListCard-6.webp"
        // },
    ];

    const FeatureCard = ({ title, description, imgSrc }) => (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img className="w-20 h-20 mb-4" src={imgSrc} alt={title} />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );

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
                            Unlock Real-Time Interactions with AI Chatbots                        
                            </h1>

                        <p className="text-lg sm:text-xl mb-8">
                            Boost Property Buyer Interactions with Real-Time AI Chatbots for Sales, Marketing, and Support
                        </p>

                        {/* Button for large screens */}
                        <div className="hidden md:flex mt-4">
                            <Link to={"/book-demo"}><a
                                href="#"
                                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition duration-300 ease-in-out shadow-lg"
                            >
                                Talk to an expert
                            </a></Link>
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
                            src="/images/realestateai.png"
                            alt="Illustration"
                            className="max-w-full h-auto md:max-w-md rounded-md shadow-lg"
                        />
                    </motion.div>

                    {/* Button for small screens */}
                    <motion.div
                        className="flex justify-center w-full mt-8 md:hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                    >
                        <Link to={"/book-demo"}><a
                            href="#"
                            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition duration-300 ease-in-out shadow-lg"
                        >
                            Talk to an expert
                        </a></Link>
                    </motion.div>
                </div>
            </div>

            <CompanyPartners />

            <section className="py-12 flex flex-wrap justify-center bg-white">
                <div className="relative w-full max-w-xl mx-auto p-6">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <div className="relative">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                            Unlock the Future of Real Estate with YesBoss.ai's AI Chatbot
                        </h2>
                        <div className="space-y-4">
                            <p className="text-lg list-disc list-inside text-gray-600">
                                At Yesboss.ai, we bring the future of real estate right to your fingertips. Our advanced AI-powered chatbot is designed to streamline your real estate operations, enhance client interactions, and boost your marketing efforts, all while providing a seamless user experience.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center space-x-4">
                            <div className="flex items-center">
                                <div className="ml-2">
                                    <img
                                        alt="Future of Real Estate"
                                        loading="lazy"
                                        width="20"
                                        height="20"
                                        src="https://gs-upload.gupshup.io/revamp/assets/v3/images/bfsi/down-arrow.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full max-w-xs mx-auto p-6">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <img
                        alt="AI Chatbot for Real Estate"
                        loading="lazy"
                        className="relative w-20000 h-2000 rounded-lg shadow-lg"
                        src="https://yellow.ai/wp-content/uploads/2022/05/use-cases-of-chatbots-in-real-estate-industry-banner.webp"
                    />


                </div>
            </section>

            <section className="py-12 flex flex-wrap justify-center bg-gray-50">
                <div className="relative w-full max-w-xs mx-auto p-6 order-2 md:order-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <img alt="Automate patient outreach and acquisition" loading="lazy" className="relative w-full h-auto rounded-lg shadow-lg" src="/images/chatbotagent.png" />
                </div>
                <div className="relative w-full max-w-xl mx-auto order-1 md:order-2">
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <div className="relative p-6">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800"> The All-in-One Solution: AI Chatbot for Inquiries, Scheduling, & Property Info</h2>
                        <div className="space-y-4">
                            <p className="text-lg list-disc list-inside text-gray-700">
                                Enhance client interactions with our intelligent chatbot, available 24/7 on WhatsApp. Whether it's answering inquiries, scheduling property viewings, or providing detailed property information, our chatbot handles it all with ease. Its multilingual capability ensures that you can communicate effectively with a diverse clientele.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 flex flex-wrap justify-center bg-white">
                <div className="relative w-full max-w-xl mx-auto p-6">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <div className="relative">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                            Embrace AI, Maintain Continuity: Our Chatbot Integrates Smoothly
                        </h2>
                        <div className="space-y-4">
                            <p className="text-lg list-disc list-inside text-gray-700">
                                Our chatbot integrates smoothly with your existing systems, ensuring that your operations remain uninterrupted while enjoying the benefits of advanced AI technology.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center space-x-4">
                            <div className="flex items-center">
                                <div className="ml-2">
                                    <img
                                        alt="Future of Real Estate"
                                        loading="lazy"
                                        width="20"
                                        height="20"
                                        src="https://gs-upload.gupshup.io/revamp/assets/v3/images/bfsi/down-arrow.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full max-w-xs mx-auto p-6">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <img
                        alt="AI Chatbot for Real Estate"
                        loading="lazy"
                        className="relative w-full h-auto rounded-lg shadow-lg"
                        src="https://www.gupshup.io/_next/image?url=https%3A%2F%2Fgs-upload.gupshup.io%2Frevamp%2Fassets%2Fv3%2Fimages%2Freal_estate%2Fv5-sidehug-2.webp&w=640&q=75"
                    />
                </div>
            </section>


            {/* <WhyChooseUs /> */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                imgSrc={feature.imgSrc}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default RealState;
