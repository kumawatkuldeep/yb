import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeroSection = () => {
    return (
        // <div className="bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-600 text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Image */}
                <motion.div
                    className="flex justify-center md:justify-end mb-8 md:mb-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
                >
                    <LazyLoadImage
                        src="/images/dash1.png"
                        alt="Illustration"
                        className="max-w-full h-auto md:max-w-md rounded-md shadow-lg"
                    />
                </motion.div>
                {/* Text */}
                <motion.div
                    className="text-center md:text-left md:w-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
                >
                    <h1 className="text-4xl text-white sm:text-5xl font-bold tracking-tight leading-tight mb-4">
                        Welcome to <span className='text-white'> Yes Boss </span> Technology
                    </h1>
                
                    <p className="text-lg sm:text-xl mb-8">
                        We are Yes Boss Technology Pvt Ltd, a SaaS company specializing in the development of AI-based chatbots for customer service, sales, and marketing. Our chatbots are used by businesses of all sizes in a variety of industries, including retail, healthcare, and finance.
                    </p>
                    <p className="text-lg sm:text-xl">
                        Our mission is to provide businesses with cutting-edge chatbot technology that improves customer engagement and business growth. We believe that chatbots are the future of customer service, and we're excited to be at the forefront of this innovation.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
