import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CompanyPartners from '../components/featureBrand/CompanyPartners';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Retail() {
    const features = [
        {
            title: "24/7 Shopping Assistant",
            description: "Get round-the-clock assistance with product inquiries and finding the right size.",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/12096/12096371.png"
        },
        {
            title: "Seamless Ordering & Payment",
            description: "Add items to your cart, choose your payment method, and place your order easily within WhatsApp.",
            imgSrc: "https://cdn-web.infobip.com/uploads/2023/03/WhatsApp-UC-Ordering-hero.webp"
        },
        {
            title: "Personalized Offers & Discounts",
            description: "Receive exclusive deals tailored to your preferences, helping you save on favorite products.",
            imgSrc: "https://img.freepik.com/premium-vector/online-shop_696497-2139.jpg?size=626&ext=jpg&ga=GA1.1.1413322319.1725037999&semt=ais_hybrid"
        },
        {
            title: "Operational Excellence",
            description: "Enhanced resource management and workflow optimization.",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItnGlNhaVHFAlHTGCN-CehIRhaYprloQl3Q&s"
        },
        {
            title: "Always Available",
            description: "Our chatbot is ready to assist you 24/7, offering immediate responses to your questions and helping you find the perfect products at any time, day or night.",
            imgSrc: "https://www.shutterstock.com/image-vector/24-7-icon-hour-service-600nw-2325614221.jpg"
        },
    ];

    const FeatureCard = ({ title, description, imgSrc }) => (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <LazyLoadImage
                className="w-20 h-20 mb-4"
                src={imgSrc}
                alt={title}
                
            />
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
                        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
                    >
                        <h1 className="text-4xl text-white sm:text-5xl font-bold tracking-tight leading-tight mb-4">
                            Elevate Your E-Commerce Experience with AI Chatbots
                        </h1>

                        <p className="text-lg sm:text-xl mb-8">
                            Offer continuous expert support, enhance sales with personalized recommendations, and enjoy a smooth, intuitive shopping experience via chat

                        </p>

                        {/* Button for large screens */}
                        <div className="hidden md:flex mt-4">
                            <Link to="/book-demo">
                                <button
                                    className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition duration-300 ease-in-out shadow-lg"
                                >
                                    Talk to an expert
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="flex justify-center md:justify-end md:w-1/2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
                    >
                        <LazyLoadImage
                            src="/images/EcommerceH-removebg-preview.png"
                            alt="Illustration"
                            className="max-w-full h-auto rounded-md shadow-lg"
                            style={{ maxWidth: '800px', height: 'auto' }} // Adjust maxWidth as needed
                            effect="blur"
                        />

                    </motion.div>

                    {/* Button for small screens */}
                    <motion.div
                        className="flex justify-center w-full mt-8 md:hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
                    >
                        <Link to="/book-demo">
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

            <section className="py-12 flex flex-wrap justify-center bg-white">
                <div className="relative w-full max-w-xl mx-auto p-6">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <div className="relative">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">Shop Smarter, Simpler with Yes Boss WhatsApp Chatbot!</h2>
                        <div className="space-y-4">
                            <p className="text-lg">
                                Imagine a shopping experience that fits seamlessly into your life. With Yes Boss innovative WhatsApp chatbot, that's exactly what you get!
                            </p>
                            <ul className="list-disc space-y-2 pl-5 text-lg text-gray-600">
                                <li>
                                    <b>Effortless Product Exploration:</b> Say goodbye to endless scrolling! Our chatbot helps you discover the perfect products with personalized recommendations and easy-to-navigate menus.
                                </li>
                                <li>
                                    <b>24/7 Shopping Assistant:</b> Need help finding the right size or have questions about a product? Our friendly chatbot is always available to answer your inquiries, day or night.
                                </li>
                                <li>
                                    <b>Seamless Ordering & Payment:</b> No more complicated checkout processes! Simply add items to your cart, choose your preferred payment method (all within WhatsApp!), and place your order with a few taps.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative w-full max-w-xs mx-auto p-6">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <LazyLoadImage
                        alt="Automate patient outreach and acquisition"
                        loading="lazy"
                        className="relative rounded-lg shadow-lg"
                        src="https://static.toiimg.com/thumb/imgsize-1093851,msid-67988069,width-375,height-210,resizemode-75/67988069.jpg"
                        style={{
                            width: '30rem',        // Set the width in rem units
                            maxWidth: '100vw',     // Ensure the image does not exceed the viewport width
                            height: 'auto',        // Maintain aspect ratio
                            marginTop: '50px',     // Space above the image
                            display: 'block',      // Block-level element
                            marginLeft: '-10rem',    // Center horizontally
                            
                        }}
                    />



                </div>
            </section>

            <section className="py-12 flex flex-wrap justify-center bg-gray-50">
                <div className="relative w-full max-w-xs mx-auto p-6 order-2 md:order-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <LazyLoadImage
                        alt="Automate patient outreach and acquisition"
                        loading="lazy"
                        className="relative w-[400px] h-auto max-w-none rounded-lg shadow-lg"
                        src="https://www.shiftbase.com/hs-fs/hubfs/fringe%20benefits.png?width=1450&name=fringe%20benefits.png"
                        effect="blur"
                    />
                </div>
                <div className="relative w-full max-w-xl mx-auto order-1 md:order-2">
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <div className="relative p-6">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">But that's not all! Here are some additional benefits you can enjoy:</h2>
                        <ul className="list-disc space-y-4 text-gray-600 pl-5">
                            <li>
                                <b>Personalized Offers & Discounts:</b> Receive exclusive deals and promotions tailored to your preferences, helping you save money on your favorite products.
                            </li>
                            <li>
                                <b>Quick & Easy Returns:</b> Initiating a return or exchange is a breeze! Our chatbot guides you through the process, ensuring a hassle-free experience.
                            </li>
                            <li>
                                <b>Multilingual Support:</b> Shop in your preferred language! Our chatbot offers multilingual support, breaking down language barriers and creating a welcoming experience for everyone.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
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

export default Retail;
