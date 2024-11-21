import { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Templates */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-700 pb-2">Templates</h2>
                        <ul>
                            <li className="mb-3">
                                <Link to="/industry/healthcare" className="hover:text-green-400 transition duration-300">Healthcare</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/industry/manufacturer" className="hover:text-green-400 transition duration-300">Manufacturer</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/industry/ecommerce" className="hover:text-green-400 transition duration-300">E-Commerce</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/industry/realstate" className="hover:text-green-400 transition duration-300">Real Estate</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-700 pb-2">Resources</h2>
                        <ul>
                            <li className="mb-3">
                                <Link to="/contact-us" className="hover:text-green-400 transition duration-300">Contact Us</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/about-us" className="hover:text-green-400 transition duration-300">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Connect with Us */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-700 pb-2">Connect with Us</h2>
                        <div className="flex flex-col items-center mb-4">
                            <div className="flex items-center mb-2">
                                <MdEmail size={24} className="mr-2" />
                                <p>Email: <a href="mailto:support@yesboss.ai" className="hover:text-green-400 transition duration-300">support@yesboss.ai</a></p>
                            </div>
                            <div className="flex items-center mb-2">
                                <MdPhone size={24} className="mr-2" />
                                <p>Phone: <a href="tel:+917230832703" className="hover:text-green-400 transition duration-300">+91 7230832703</a></p>
                            </div>
                            <div className="flex justify-center md:justify-start space-x-4 mt-2">
                                <a href="https://in.linkedin.com/company/yes-boss-technology" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition duration-300"><FaLinkedin size={24} /></a>
                                <a href="https://www.instagram.com/yesboss_ai?igshid=MzMyNGUyNmU2YQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition duration-300"><FaInstagram size={24} /></a>
                                <a href="https://www.facebook.com/yesbossai/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition duration-300"><FaFacebook size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-6 mt-12 border-t border-gray-700 shadow-inner">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <p>Yes Boss Technology Pvt Ltd &copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <Link to="/Privacy-Policy" className="text-white hover:text-blue-300 transition duration-300">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="text-white hover:text-blue-300 transition duration-300">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
