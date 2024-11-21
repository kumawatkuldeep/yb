/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import WhyChooseUs from "../components/Test/Healthcarecard";
// import {Link} from 'react-router-dom'

function FoodAndBeverage() {

    const features = [
        {
            title: "Tailored Solutions:",
            description: "Designed specifically for the healthcare industry",
            imgSrc: "https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/productListCard-1.webp"
        },
        {
            title: "Advanced Technology",
            description: "Leveraging AI and multilingual capabilities",
            imgSrc: "https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/productListCard-2.webp"
        },
        {
            title: "Efficient Communication",
            description: "Seamless interaction with patients and staff",
            imgSrc: "https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/productListCard-3.webp"
        },
        {
            title: "Operational Excellence",
            description: " Enhanced resource management and workflow optimization.",
            imgSrc: "https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/productListCard-4.webp"
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


                            Enhance dining and
                            delivery experience with
                            AI chatbots
                        </h1>

                        <p className="text-lg sm:text-xl mb-8">
                            Enhance customer experience and own a larger slice of the pie with relevant
                            re-engagement campaigns and intuitive commerce catalogs
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#"
                                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-zinc-700 transition duration-300 ease-in-out shadow-lg"
                            >
                                Talk to an expert
                            </a>
                            {/* <a
                                href="#"
                                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-zinc-700 transition duration-300 ease-in-out shadow-lg"
                            >
                                Partner Login
                            </a> */}
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
                            src="/images/Food$brav.webp"
                            alt="Illustration"
                            className="max-w-full h-auto md:max-w-md rounded-md shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>


            <section className="py-12 flex flex-wrap justify-center">
                <div className="max-w-xl mx-auto p-6">
                    <h2 className="text-3xl font-bold mb-4">Welcome to DineBot</h2>
                    <div className="space-y-4">
                        <p className="text-lg">Your Comprehensive Chatbot Solution for Restaurants and Banquets
                        At DineBot, we revolutionize the dining and event experience with our advanced AI-powered chatbot. Designed specifically for restaurants and banquet services, our chatbot enhances customer interactions, streamlines marketing efforts, and ensures seamless communication.</p>
                        {/* <p className="text-lg">Allow patients to discover doctors, book appointments, pay for consultation</p> */}
                        {/* <p className="text-lg">Integrate with <span className="font-semibold">back-end</span> billing, inventory, and insurance claims management and automate invoices for payments</p> */}
                    </div>
                    <div className="mt-8 flex items-center space-x-4">
                        <div className="flex items-center">
                            <span className="text-4xl font-bold">33</span><span className="text-2xl font-bold">%</span>
                            <div className="ml-2">
                                <img alt="Patient Acquisition costs" loading="lazy" width="20" height="20" src="https://gs-upload.gupshup.io/revamp/assets/v3/images/bfsi/down-arrow.svg" />
                            </div>
                        </div>
                        {/* <p className="text-lg max-w-xs">Patient Acquisition costs</p> */}
                    </div>
                </div>
                <div className="max-w-xs mx-auto p-6">
                    <img alt="Automate patient outreach and acquisition" loading="lazy" className="w-full h-auto" src="https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/sidehug-1.webp" />
                </div>
            </section>

            <section className="py-12 flex flex-wrap justify-center">
                <div className="max-w-xs mx-auto p-6">
                    <img alt="Automate patient outreach and acquisition" loading="lazy" className="w-full h-auto" src="https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/sidehug-1.webp" />
                </div>
                <div className="max-w-xl mx-auto p-6">
                    <h2 className="text-3xl font-bold mb-4">User Engagement</h2>
                    <div className="space-y-4">
                        <p className="text-lg"> AI-Powered Chatbot Enhance your customer service with our intelligent chatbot, available 24/7 on WhatsApp. Whether it's taking reservations, answering menu inquiries, or providing event details, our chatbot handles it all efficiently. With multilingual capabilities, you can cater to a diverse clientele with ease.</p>
                        {/* <p className="text-lg">Allow patients to discover doctors, book appointments, pay for consultation</p> */}
                        {/* <p className="text-lg">Integrate with <span className="font-semibold">back-end</span> billing, inventory, and insurance claims management and automate invoices for payments</p> */}
                    </div>
                    <div className="mt-8 flex items-center space-x-4">
                        <div className="flex items-center">
                            <span className="text-4xl font-bold">33</span><span className="text-2xl font-bold">%</span>
                            <div className="ml-2">
                                <img alt="Patient Acquisition costs" loading="lazy" width="20" height="20" src="https://gs-upload.gupshup.io/revamp/assets/v3/images/bfsi/down-arrow.svg" />
                            </div>
                        </div>
                        {/* <p className="text-lg max-w-xs">Patient Acquisition costs</p> */}
                    </div>
                </div>
            </section>

            <section className="py-12 flex flex-wrap justify-center">
                <div className="max-w-xl mx-auto p-6">
                    <h2 className="text-3xl font-bold mb-4">Auto Reminders</h2>
                    <div className="space-y-4">
                        <p className="text-lg"> Never let your customers miss a reservation or event with our automated reminders. Our chatbot sends timely notifications to ensure your patrons are always informed and prepared..</p>
                        {/* <p className="text-lg">Allow patients to discover doctors, book appointments, pay for consultation</p> */}
                        {/* <p className="text-lg">Integrate with <span className="font-semibold">back-end</span> billing, inventory, and insurance claims management and automate invoices for payments</p> */}
                    </div>
                    <div className="mt-8 flex items-center space-x-4">
                        <div className="flex items-center">
                            <span className="text-4xl font-bold">33</span><span className="text-2xl font-bold">%</span>
                            <div className="ml-2">
                                <img alt="Patient Acquisition costs" loading="lazy" width="20" height="20" src="https://gs-upload.gupshup.io/revamp/assets/v3/images/bfsi/down-arrow.svg" />
                            </div>
                        </div>
                        {/* <p className="text-lg max-w-xs">Patient Acquisition costs</p> */}
                    </div>
                </div>
                <div className="max-w-xs mx-auto p-6">
                    <img alt="Automate patient outreach and acquisition" loading="lazy" className="w-full h-auto" src="https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/sidehug-1.webp" />
                </div>
            </section>

            <section className="py-12 flex flex-wrap justify-center">
                <div className="max-w-xs mx-auto p-6">
                    <img alt="Automate patient outreach and acquisition" loading="lazy" className="w-full h-auto" src="https://gs-upload.gupshup.io/revamp/assets/v3/images/health-care/sidehug-1.webp" />
                </div>
                <div className="max-w-xl mx-auto p-6">
                    <h2 className="text-3xl font-bold mb-4"> Auto Birthday Offers</h2>
                    <div className="space-y-4">
                        <p className="text-lg"> Delight your customers with personalized birthday offers. Our chatbot automatically sends special discounts and promotions on their birthdays, making them feel valued and encouraging repeat visits.</p>
                        {/* <p className="text-lg">Allow patients to discover doctors, book appointments, pay for consultation</p> */}
                        {/* <p className="text-lg">Integrate with <span className="font-semibold">back-end</span> billing, inventory, and insurance claims management and automate invoices for payments</p> */}
                    </div>
                    <div className="mt-8 flex items-center space-x-4">
                        <div className="flex items-center">
                            <span className="text-4xl font-bold">33</span><span className="text-2xl font-bold">%</span>
                            <div className="ml-2">
                                <img alt="Patient Acquisition costs" loading="lazy" width="20" height="20" src="https://gs-upload.gupshup.io/revamp/assets/v3/images/bfsi/down-arrow.svg" />
                            </div>
                        </div>
                        {/* <p className="text-lg max-w-xs">Patient Acquisition costs</p> */}
                    </div>
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

export default FoodAndBeverage