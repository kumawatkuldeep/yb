import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for the image popup

  const handleImageClick = () => {
    setIsPopupOpen(true); // Open the popup when the image is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup when the close button is clicked
  };

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
          <div
            style={{ opacity: 1 }}
            className="hero-section-mark-container mb-5 flex items-center justify-center md:justify-start"
          >
            <LazyLoadImage
              src="https://cdn.prod.website-files.com/64710a58deace073b8c4a98a/6472ff5cbd1a3e1ac4d33630_whatsapp.webp"
              alt="Official WhatsApp API"
              className="hero-section-mark mr-2"
              style={{
                transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <div className="text-[26px]">Official WhatsApp&nbsp;API</div>
          </div>

          <h1 className="text-4xl text-white sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            Supercharge Your Business with Yes Boss on WhatsApp
          </h1>

          <p className="text-lg sm:text-xl mb-8">
            Boost your business with AI-powered WhatsApp chatbots for seamless automation and enhanced customer engagement
          </p>

          {/* Button for large screens */}
          <div className="hidden md:flex mt-4">
            <Link
              to="/book-demo"
              className="inline-block bg-gray-800 text-white px-8 py-4 rounded-md font-semibold text-xl hover:bg-green-700 transition duration-300 ease-in-out shadow-lg"
            >
              Schedule a Free Demo
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center md:justify-end md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        >
          <LazyLoadImage
            src="./images/heroui.png"
            alt="Illustration"
            className="h-auto rounded-md shadow-lg cursor-pointer"
            onClick={handleImageClick} // Open popup on image click
          />
        </motion.div>

        {/* Button for small screens */}
        <motion.div
          className="flex justify-center w-full mt-8 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        >
          <Link
            to="/book-demo"
            className="inline-block bg-gray-800 text-white px-8 py-4 rounded-md font-semibold text-xl hover:bg-zinc-700 transition duration-300 ease-in-out shadow-lg"
          >
            Free Trial
          </Link>
        </motion.div>
      </div>

      {/* Image Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 bg-white text-black p-2 rounded-full m-4 w-10 h-10 flex items-center justify-center"
              onClick={handleClosePopup}
            >
              X
            </button>
            <img
              src="./images/heroui.png"
              alt="Popup Illustration"
              className="max-w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
