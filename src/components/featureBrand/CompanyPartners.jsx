import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";

const Marqu = () => {
    const images = [
        {
            src: "/images/ME_logo.jpeg",
            alt: "Medical Equipment Logo - ME",
            className: "brand-logo",
        },
        {
            src: "/images/Dev Dental Logo.jpeg",
            alt: "Dev Dental Logo",
            className: "brand-logo rounded-[50px]",
        },
        {
            src: "/images/LOGO_TOUCH N FEEL SALON_31.10.22_CURVE.png",
            alt: "",
            className: "brand-logo",
        },
        { src: "/images/PlanetEducation.jpeg", alt: "", className: "brand-logo" },
        { src: "/images/Mithaipan.jpg", alt: "", className: "brand-logo" },
        { src: "/images/Shikhar.jpg", alt: "", className: "brand-logo" },
        { src: "/images/weon_logo.jpg", alt: "Weon Logo", className: "brand-logo" },
        {
            src: "/images/ankitagro_logo.jpg",
            alt: "AnkitaGro Logo",
            className: "brand-logo",
        },
        {
            src: "/images/elegance_logo.jpg",
            alt: "Elegance Logo",
            className: "brand-logo rounded-[20px]",
        },
        {
            src: "/images/sendclean-logo.webp",
            alt: "",
            className: "brand-logo w-[160px] rounded-[50%]",
        },
        {
            src: "/images/meddive1.jpeg",
            alt: "",
            className: "brand-logo w-[160px]",
        },
        {
            src: "/images/QAonTop2.png",
            alt: "",
            className: "brand-logo w-[160px] rounded-[40%]",
        },
    ];

    // Duplicate the images array to ensure continuous scrolling
    const duplicatedImages = [...images, ...images];

    return (
        <section className="marquee-container">
            <div className="content">
                <h1 className="title">Featured Brands</h1>
                <p className="subtitle">Check out our trusted partners</p>
                <Marquee className="marquee" loop={0}>
                    {duplicatedImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={image.className}
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Marqu;