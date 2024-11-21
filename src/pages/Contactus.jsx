import React, { useState } from 'react';
import axios from 'axios';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";
import Select from 'react-select';

const countryOptions = [
    { value: '+91', label: '🇮🇳 India (+91)' },
    { value: '+1', label: '🇺🇸 USA (+1)' },
    { value: '+44', label: '🇬🇧 UK (+44)' },
    { value: '+61', label: '🇦🇺 Australia (+61)' },
    { value: '+81', label: '🇯🇵 Japan (+81)' },
    { value: '+86', label: '🇨🇳 China (+86)' },
    { value: '+49', label: '🇩🇪 Germany (+49)' },
    { value: '+33', label: '🇫🇷 France (+33)' },
    { value: '+39', label: '🇮🇹 Italy (+39)' },
    { value: '+34', label: '🇪🇸 Spain (+34)' },
    { value: '+7', label: '🇷🇺 Russia (+7)' },
    { value: '+82', label: '🇰🇷 South Korea (+82)' },
    { value: '+971', label: '🇦🇪 UAE (+971)' },
    { value: '+27', label: '🇿🇦 South Africa (+27)' },
    { value: '+55', label: '🇧🇷 Brazil (+55)' },
    { value: '+62', label: '🇮🇩 Indonesia (+62)' },
    { value: '+52', label: '🇲🇽 Mexico (+52)' },
    { value: '+54', label: '🇦🇷 Argentina (+54)' },
    { value: '+60', label: '🇲🇾 Malaysia (+60)' },
    { value: '+66', label: '🇹🇭 Thailand (+66)' },
    { value: '+65', label: '🇸🇬 Singapore (+65)' },
    { value: '+20', label: '🇪🇬 Egypt (+20)' },
    { value: '+90', label: '🇹🇷 Turkey (+90)' },
    { value: '+48', label: '🇵🇱 Poland (+48)' },
    { value: '+32', label: '🇧🇪 Belgium (+32)' },
];

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        countryCode: countryOptions[0], // Set default country code to India
        businessCategory: '',
        location: '',
        message: '',
        agreeToTerms: false
    });

    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleCountryChange = (selectedOption) => {
        setFormData({
            ...formData,
            countryCode: selectedOption
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Submitting form data:", formData);

        const { name, email, phone_number, countryCode, businessCategory, location, message, agreeToTerms } = formData;
        if (!name || !email || !phone_number || !businessCategory || !location || !message || !agreeToTerms) {
            alert("Please fill all required fields and agree to the terms.");
            return;
        }

        try {
            const response = await axios.post(
                "https://ankitagro.yesbossyes.com/django/insert_dynamic_document",
                JSON.stringify({
                    ...formData,
                    phone_number: `${countryCode.value}${phone_number}`
                }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Form submitted successfully:', response.data);

            setFormData({
                name: '',
                email: '',
                phone_number: '',
                countryCode: countryOptions[0], // Reset to default country code
                businessCategory: '',
                location: '',
                message: '',
                agreeToTerms: false
            });
            alert("Request sent successfully");
        } catch (error) {
            console.error("Error submitting form:", error.response ? error.response.data : error.message);
            alert("Error submitting form. Please try again later.");
        }
    };

    return (
        <>
            <Navbar2 />
            <section className="relative bg-black py-16 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg="
                        alt="Contact Us"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <h1 className="text-6xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-2xl text-gray-300 text-center mb-8">Get in Touch with YesBoss.Ai</p>
                </div>
            </section>
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="lg:w-1/2 bg-black text-white p-8 rounded-lg shadow-md">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch with YesBoss.<span className="text-blue-500 text-5xl lg:text-4xl">AI</span> 👋 </h2>
                        <p className="text-lg mb-4">
                            Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues. Just push a text to us and we will get back to you immediately.
                        </p>
                        <p className="text-lg mb-2">India</p>
                        <p className="text-lg mb-2">support@yesboss.ai</p>
                        <p className="text-lg">+91 7230832703</p>
                    </div>
                

                    <div
                        className={`lg:w-1/2 bg-black text-white p-8 rounded-lg shadow-2xl relative ${isFocused ? 'ring-4 ring-blue-300' : ''}`}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                                Drop Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone_number" className="block text-sm font-semibold mb-2">Phone No</label>
                                    <div className="flex border border-gray-300 rounded-md">
                                        <Select
                                            options={countryOptions}
                                            value={formData.countryCode}
                                            onChange={handleCountryChange}
                                            className="w-20"  // Fixed width for the Select component
                                            styles={{
                                                option: (provided) => ({
                                                    ...provided,
                                                    color: 'black', // Text color in dropdown
                                                }),
                                                singleValue: (provided) => ({
                                                    ...provided,
                                                    color: 'black', // Text color next to the flag
                                                }),
                                                container: (base) => ({
                                                    ...base,
                                                    width: '80px',  // Fixed width for dropdown
                                                    minWidth: '150px',  // Ensure dropdown does not stretch
                                                    marginRight: '0px', // No margin needed inside the border
                                                }),
                                                control: (provided) => ({
                                                    ...provided,
                                                    border: 'none', // Remove border to align with input field
                                                    boxShadow: 'none', // Remove shadow
                                                }),
                                            }}
                                        />
                                        <input
                                            type="tel"
                                            id="phone_number"
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                            required
                                            className="flex-grow text-black" // Remove border to blend with Select
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>      
                                <div className="mb-4">
                                    <label htmlFor="businessCategory" className="block text-sm font-semibold mb-2">Business Category</label>
                                    <select
                                        id="businessCategory"
                                        name="businessCategory"
                                        value={formData.businessCategory}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                    >
                                        <option value="">Select a category</option>
                                        <option value="Enterprise">Enterprise</option>
                                        <option value="Startup">Startup</option>
                                        <option value="ISV">ISV</option>
                                        <option value="Partner">Partner</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="location" className="block text-sm font-semibold mb-2">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-2 py-1 border border-gray-300 rounded-md text-black h-20" // Reduced padding and height
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                    ></textarea>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input
                                        id="agreeToTerms"
                                        name="agreeToTerms"
                                        type="checkbox"
                                        checked={formData.agreeToTerms}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        required
                                    />
                                    <label htmlFor="agreeToTerms" className="text-sm font-semibold ml-2">
                                        I agree to the <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link> and <Link to="/terms-conditions" className="text-blue-500 hover:underline">Terms & Conditions</Link>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 px-8 bg-blue-800 text-white font-bold text-xl rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out flex items-center justify-center relative"
                                >
                                    Connect With YesBoss Today
                                    <div className="ml-4">
                                        <FaArrowUp className="text-white text-2xl" />
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-900 text-white text-center">
                <h2 className="text-4xl font-bold mb-8">Get Ready to Grow Your Business</h2>
                <div className="flex justify-center space-x-8 mb-8">
                    <div className="bg-black p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <h3 className="text-2xl font-bold mb-4">Call Us</h3>
                        <p className="text-lg mb-4">+91 7230832703</p>
                        <a href="tel:+917230832703" className="text-blue-400 hover:underline">
                            Call Now <span className="ml-2 inline-block">→</span>
                        </a>
                    </div>

                    <div className="bg-black p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <h3 className="text-2xl font-bold mb-4">Email Us</h3>
                        <p className="text-lg mb-4">support@yesboss.ai</p>
                        <a href="mailto:support@yesboss.ai" className="text-blue-400 hover:underline">
                            Email Now <span className="ml-2 inline-block">→</span>
                        </a>
                    </div>
                </div>
                <p className="text-lg mb-4">Our team is ready to help you with your inquiries.</p>
                <p className="text-lg">Connect with us and let’s discuss how we can assist you in growing your business.</p>
            </section>
            <Footer />
        </>
    );
};

export default ContactUs;
