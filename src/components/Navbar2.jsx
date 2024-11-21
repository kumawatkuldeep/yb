import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isCareersOpen, setIsCareersOpen] = useState(false);

    const productRef = useRef(null);
    const careersRef = useRef(null);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleProductDropdown = () => setIsProductOpen(!isProductOpen);
    const toggleCareersDropdown = () => setIsCareersOpen(!isCareersOpen);

    const handleLogoClick = (e) => {
        e.preventDefault();
        sessionStorage.setItem('logoClicked', 'true');
        navigate('/');
    };

    const handleClickOutside = (event) => {
      
        if (
            productRef.current && !productRef.current.contains(event.target)
        ) {
            setIsProductOpen(false);
        }

        if (
            careersRef.current && !careersRef.current.contains(event.target)
        ) {
            setIsCareersOpen(false);
        }
    };

    useEffect(() => {
  
        document.addEventListener('mousedown', handleClickOutside);

     
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative bg-light-color">
           
            <nav
                className="relative z-10 shadow-md "
                style={{
                    background: 'linear-gradient(90deg, #FF9933, #FFFFFF, #138808)',
                    height: '90px', 

                }}
            >
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between"> 
                    <Link
                        to="/"
                        className="flex items-center space-x-0 rtl:space-x-reverse transition-transform duration-300 hover:scale-110 hover:shadow-lg" // Added transition and hover effects
                        onClick={handleLogoClick}
                    >
                        <img
                            src="/images/logo.png"
                            className="h-[100px] transition-transform duration-300 -ml-30 sm:-ml-16 md:-ml-10 lg:-ml-10 md:mr-2 lg:mr-4"
                            alt="Logo"
                        />

                        <span className="self-center space-x-2 text-[22px] font-semibold whitespace-nowrap text-gray-900">
                            Yes Boss
                        </span>


                    </Link>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to="/book-demo">
                            <button
                                className="hidden md:block bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:border-transparent text-sm font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
                                type="button"
                            >
                                Book a demo
                            </button>
                        </Link>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-cta"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            {!isOpen ? (
                                <svg
                                    className="w-5 h-5 text-black"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            ) : (
                                <svg
                                        className="h-5 w-5 text-black"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className={`w-full md:flex md:items-center md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-cta">
                        <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 mt-4 border border-gray-100 rounded-lg bg-white md:border-0">
                            <li className="relative group" ref={productRef}>
                                <button
                                    onClick={toggleProductDropdown}
                                    className="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 navbar-option container mx-auto flex md:flex-row md:justify-between"
                                >
                                    Product
                                    <svg className={`w-4 h-4 inline ml-auto mr-2 lg:ml-2 lg:mr-0 ${isProductOpen ? 'transform rotate-180' : ''} mt-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isProductOpen && (
                                    <ul className="md:absolute left-0 w-full md:w-auto bg-white shadow-lg rounded-md mt-0 z-10 transition-all duration-300 ease-in-out border border-black">
                                        <li>
                                            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-black text-center" to="/industry/healthcare">Healthcare</Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-black text-center" to="/industry/manufacturer">Manufacturer/Wholeseller</Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-black text-center" to="/industry/ecommerce">E-Commerce</Link>
                                        </li>
                                        <li>
                                            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-black text-center" to="/industry/realstate">Real Estate</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="relative group mt-4 md:mt-0" ref={careersRef}>
                                <button
                                    onClick={toggleCareersDropdown}
                                    className={`block py-2 px-3 font-bold text-gray-900  text-black border-2 border-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 navbar-option container mx-auto flex md:flex-row md:justify-between ${isCareersOpen ? 'bg-black text-white' : ''}`}
                                >
                                    Careers
                                </button>
                                {isCareersOpen && (
                                    <ul className="md:absolute left-0 w-full md:w-auto bg-white shadow-lg rounded-md mt-0 z-10 transition-all duration-300 ease-in-out border border-black">
                                        <li>
                                            <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-black text-center" to="/careers">Careers</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="block md:hidden mt-2">
                                <hr className="my-4 border-t-2 border-gray-400" />
                                <Link to="/book-demo">
                                    <button
                                        type="button"
                                        className="w-full text-white bg-zinc-800 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center container mx-auto flex md:flex-row md:justify-between md:items-center flex-col items-center"
                                    >
                                        Book Demo
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar2;
