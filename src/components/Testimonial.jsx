import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 

const TestimonialCard = ({ image, name, title, testimonial }) => {
    return (
        <div className="bg-white text-black p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <LazyLoadImage
                className="w-24 h-24 rounded-full border-4 border-gray-700"
                src={image}
                alt={name}
                effect="blur" 
                placeholderSrc="/path/to/placeholder/image.jpg" 
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-center text-gray-600 mt-4">{testimonial}</p>
        </div>
    );
};

const TestimonialSection = () => {
    const testimonials = [
        {
            image: "/images/ME_logo.jpeg",
            name: "Mahendra Suthar",
            title: "MD @ Mitlesh Enterprises",
            testimonial: "This platform has transformed the way we work. Seamless integration and fantastic support!"
        },
        {
            image: "/images/ankitagro_logo.jpg",
            name: "Ankit Prajapati",
            title: "CEO @ Ankit Agro",
            testimonial: "Incredibly efficient and user-friendly. Our productivity has increased significantly."
        },
        {
            image: "/images/QAonTop2.png",
            name: "Kalpesh Tank",
            title: "Director @ QA on Top",
            testimonial: "A game-changer for our operations. Highly recommended for any business."
        }
    ];

    return (
        <section className="py-16 bg-white text-black">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
                    <p className="max-w-3xl mx-auto text-gray-500 mt-4 md:text-xl lg:text-base xl:text-xl">
                        Hear what our customers have to say about our platform.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
