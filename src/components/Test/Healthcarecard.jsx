import React from 'react';

const features = [
    {
        title: "Tailored Solutions:",
        description: "Designed specifically for the healthcare industry",
        imgSrc: "https://pagegpt.pro/api/utilities/image/doctor-logo-maker/confirmed/1694696619738-62501.png"
    },
    {
        title: "Advanced Technology",
        description: "Leveraging AI and multilingual capabilities",
        imgSrc: "https://cdn.prod.website-files.com/6678facede15af0ca772a8c0/66b1d4f76cb2f72f28bf3cfa_66b1ce6969029512d798cd4b_Screenshot%25202024-08-06%2520at%252012.48.54%25E2%2580%25AFPM.png"
    },
    {
        title: "Efficient Communication",
        description: "Seamless interaction with patients and staff",
        imgSrc: "https://cipherhealth.com/wp-content/uploads/2019/08/CH-Communication-Blog.jpg"
    },
    {
        title: "Operational Excellence",
        description: " Enhanced resource management and workflow optimization.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItnGlNhaVHFAlHTGCN-CehIRhaYprloQl3Q&s"
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

const WhyChooseUs = () => (
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
);

export default WhyChooseUs;
