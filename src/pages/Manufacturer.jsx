/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import WhyChooseUs from "../components/Test/Healthcarecard";
import CompanyPartners from '../components/featureBrand/CompanyPartners';
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Manufacturer() {
    const features = [
        {
            title: "Multilingual AI Chatbots",
            description: "Engage customers worldwide with chatbots that converse in multiple languages, fostering relationships and boosting sales",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZ1GERhIe1NPx6aQzJCkqpG4_oqlvs7gjbA&s"
        },
        {
            title: "Dynamic WhatsApp Catalogs",
            description: "Showcase your latest products within WhatsApp. Customers can browse, inquire, and order seamlessly.",
            imgSrc: "https://www.wati.io/wp-content/uploads/2023/03/22-From-Browsing-to-Buying-WhatsApp-Catalog-for-Seamless-Shopping-2-1-1-1024x512.png"
        },
        {
            title: "Instant Information Access",
            description: "Provide bank details, location, and contact info instantly with our chatbots for a seamless customer experience.",
            imgSrc: "https://thumbs.dreamstime.com/b/manager-pushing-instant-access-onscreen-touch-screen-interface-technology-concept-content-management-business-65436707.jpg"
        },
        {
            title: "Empower Your Sales Team",
            description: " Track sales team locations in real-time to maximize availability and sales opportunities.",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMblwAc_3N-h7hgp04N_uHMH-QgovmaJhYg&s"
        },
        {
            title: "Automated Remainders",
            description: "Birthday Remainders , Feedback Remainder and lot more .",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-Zq9n9xb1fMRKe9xaHb-e58ymcdOd0KgqA&s"
        },
        // {
        //     title: "24/7 Customer Support",
        //     description: "Offer continuous service, even outside business hours, with our comprehensive solutions".
        //     // imgSrc: "https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/productListCard-6.webp"
        // },
        {
            title: "24/7 Customer Support",
            description: "Offer continuous service, even outside business hours, with our comprehensive solutions.",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrK4KDIBQZ8TxvBKOxjd5F67qyCEoEg4hmzw&s"
        },
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
                            Transform Your Shopping with AI Chatbots
                        </h1>

                        <p className="text-lg sm:text-xl mb-8">
                            Elevate customer service 24/7, maximize sales, and provide a seamless, personalized shopping experience through chat
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
                        <LazyLoadImage
                            src="/images/shop-ai.png"
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

            <section className="py-5 flex flex-wrap justify-center bg-white">
                <div className="relative w-full max-w-xl mx-auto p-6">
                    <div className="absolute top-0 left-0 w-32 h-20 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <div className="relative">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">Shop Smarter, Simpler with Yes Boss WhatsApp Chatbot!</h2>
                        <ul className=" list-disc  space-y-4 text-gray-600 pl-5">
                        <li>
                        <b>Multilingual Chatbots :</b>Our AI-powered chatbots seamlessly converse in multiple languages, fostering stronger relationships and increasing sales opportunities.
                        </li>
                    <li>
                        <b>Automatic Catalogs: </b>Ditch the outdated PDFs! Our dynamic chatbots showcase your latest product catalogs directly within WhatsApp. Customers can browse, inquire, and place orders – all within the familiar app they love.
                    </li>
                    <li>
                        <b>All-in-one Information Hub:</b> Need bank details, location information, or contact details? Our chatbots have it all at their fingertips. Provide a seamless customer experience with instant access to essential company information.
                    </li>
                       
                        </ul>
                    </div>
                </div>
                <div className="relative flex-1 max-w-xl mx-9">
                    {/* <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div> */}
                    <LazyLoadImage
                        alt="Automate patient outreach and acquisition"
                        loading="lazy"
                        className="relative w-full h-auto rounded-lg"
                        src="/images/shopsmart.svg"
                    // style={{ height: '480px' }}
                    />
                </div>
            </section>

            <section className="py-12 flex flex-wrap justify-center bg-gray-50">

                <div className="relative w-full max-w-xs mx-auto p-6 order-2 md:order-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
        <img alt="Automate patient outreach and acquisition" loading="lazy" className="relative w-full h-full rounded-lg shadow-lg" src="/images/business.png" />
    </div>

                <div className="relative w-full max-w-xl mx-auto order-1 md:order-2">
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <div className="relative p-6">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">Enhance your wholesale business further with these additional functionalities:</h2>
                        <ul className=" list-disc  space-y-4 text-gray-600 pl-5">
                        <li>
                        <b>Sales Order Integration:</b> Simplify the ordering process. Customers can place orders directly through the chatbot, eliminating errors and saving valuable time.
                        </li>
                    <li>
                        <b>Salesman Location Tracking:</b> Empower your sales team! Track their location in real-time, ensuring they're always available to meet customer needs and maximize sales opportunities.
                    </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-12 flex flex-wrap justify-center bg-white">
                <div className="relative w-full max-w-xl mx-auto p-6">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                    <div className="relative">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">Explore our additional tools designed to streamline your operations:</h2>
                        <ul className="list-disc space-y-4 text-gray-600 pl-5">
                        <li>
                        <b>Inventory Management: </b>Track stock levels in real-time for accurate pricing and order fulfillment.
                        </li>
                    <li>
                        <b>Promotional Offers:</b> Share exclusive deals and discounts directly through the chatbot to drive sales.
                    </li>
                    <li>
                        <b>24/7 Support:</b> Offer continuous customer service, even outside business hours.
                    </li>
                        </ul>
                    </div>
                </div>
                <div className="relative flex-1 max-w-xl mx-9">
                    {/* <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div> */}
                    <LazyLoadImage
                        alt="Automate patient outreach and acquisition"
                        loading="lazy"
                        className="relative w-full h-auto rounded-lg"
                        src="/images/aditool.png"
                    // style={{ height: '480px' }}
                    />
                </div>
            </section>


            {/* <WhyChooseUs /> */}
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
    )
}

export default Manufacturer