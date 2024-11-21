import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AboutUs = () => {
  return (
    <Layout>
      <style>
        {`
          /* Styles for screens smaller than or equal to 375px */
          @media (max-width: 375px) {
            .laptop-image {
              width: 80%;
              height: "2rem";
            }
              `}
      </style>
      {/* Banner Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1508923567004-d4c1a09e0481)' }}>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Discover our journey, values, and the team behind our success.
            </p>
          </div>

          {/* Laptop and Info Section */}
          <div className="relative flex justify-center items-center mb-16">
            <motion.div
              className="relative w-full md:w-3/4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <LazyLoadImage
                src="https://cdn.prod.website-files.com/64710a58deace073b8c4a98a/64710a58deace073b8c4ab7a_Macbook%20Image.webp"
                alt="Laptop Image"
                className="w-full h-auto object-cover"
              />

              {/* Text inside Image */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-6 lg:px-8 overflow-hidden">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center">
                  Who we are?
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  Yes Boss provides AI-powered solutions for your business or organization, specializing in the
                  development of cutting-edge chat-bots that redefine customer service, sales, and marketing
                  strategies. Our commitment lies in crafting technology that transforms interactions, empowers
                  businesses, and elevates customer experiences.
                </p>
              </div>
            </motion.div>
          </div>
          {/* Sector Solutions */}
          {/* Sector Solutions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-35 lg:gap-30 mt-30 lg:mt-30 lg:ml-40 lg:pl-25">


            {/* Healthcare */}
            <div className="text-center mb-4">
              <img
                src="https://cdn-icons-png.freepik.com/256/2382/2382533.png?ga=GA1.1.1413322319.1725037999&semt=ais_hybrid"
                alt="Healthcare"
                className="mx-auto mb-2 w-16 h-16"
              />
              <h3 className="text-lg sm:text-xl font-semibold">Healthcare</h3>
            </div>

            {/* Manufacturer/Wholeseller */}
            <div className="text-center mb-4">
              <img
                src="https://cdn-icons-png.freepik.com/256/9252/9252096.png?ga=GA1.1.1413322319.1725037999&semt=ais_hybrid"
                alt="Manufacturer"
                className="mx-16 mb-2 w-16 h-16"
              />
              <h3 className="text-lg sm:text-xl font-semibold">Manufacturer/Wholeseller</h3>
            </div>

            {/* E-Commerce */}
            <div className="text-center mb-4 lg:ml-10">
              <img
                src="https://cdn-icons-png.freepik.com/256/1162/1162499.png?ga=GA1.1.1413322319.1725037999&semt=ais_hybrid"
                alt="E-Commerce"
                className="mx-auto mb-2 w-16 h-16"
              />
              <h3 className="text-lg sm:text-xl font-semibold">E-Commerce</h3>
            </div>

            {/* Real Estate */}
            <div className="text-center mb-4 ml-10">
              <img
                src="https://cdn-icons-png.freepik.com/256/7500/7500521.png?ga=GA1.1.1413322319.1725037999&semt=ais_hybrid"
                alt="Real Estate"
                className="mx-auto mb-2 w-16 h-16"
              />
              <h3 className="text-lg sm:text-xl font-semibold">Real Estate</h3>
            </div>
          </div>


          {/* Vision Section */}
          <motion.div
            className="relative bg-white text-black p-6 md:p-8 rounded-lg w-full mb-8 flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Left Section with Vision Text */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
              <p className="text-lg leading-relaxed text-left">
                In a world where customer expectations are evolving rapidly, we're here to equip businesses
                with the tools they need to thrive. Our AI chatbots provide real-time, personalized engagement
                that goes beyond conventional methods. Whether you're in retail, healthcare, finance, or any
                industry, we're here to drive your growth.
              </p>
            </div>

            {/* Right Section with MISSION VISION */}
            <div className="w-full md:w-1/2 text-center md:text-right md:pr-70">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-yellow-500">MISSION</span><br />
                <span className="text-gray-700">VISION</span>
              </h2>
              <div></div>
            </div>

          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            className="relative bg-darkblue-600 text-white p-6 md:p-8 rounded-lg w-full mb-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col items-center px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Why Choose Yes Boss</h2>
              <ul className="text-base md:text-xl leading-relaxed text-center max-w-xl list-none">
                <li className="mb-4">
                  ✓ Elevate Customer Service: Our chatbots redefine customer support, delivering prompt assistance 24/7.
                </li>
                <li className="mb-4">
                  ✓ Boost Sales: Engage leads, nurture prospects, and drive conversions with AI-driven strategies.
                </li>
                <li>
                  ✓ Transform Marketing: From tailored campaigns to data-driven insights, our chatbots enhance your marketing initiatives.
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
