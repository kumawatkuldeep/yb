import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OptionHeroSec = () => {
    return (
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

                        Enhance healthcare engagements with
                        AI Chatbots
                    </h1>

                    <p className="text-lg sm:text-xl mb-8">
                        Deliver better health outcomes and unblock staff bandwidth with automated outreach, appointment booking, feedback collection and consultation reminders
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
                    <LazyLoadImage
                        src="/images/product-hero.webp"
                        alt="Illustration"
                        className="max-w-full h-auto md:max-w-md rounded-md shadow-lg"
                    />
                </motion.div>
            </div>
        </div>

    )
}

export default OptionHeroSec