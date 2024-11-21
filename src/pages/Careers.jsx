// CareerPage.js
import React from 'react';
import Layout from '../components/Layout';

const CareerPage = () => {
    // Array of job descriptions
    const jobDescriptions = [
        {
            position: "Business Development Associate",
            description: "We are searching for an enthusiastic and driven Business Development Associate (BDA) to join our growing team in Ahmedabad, Gujarat. As a BDA in B2B IT Sales, you'll play a crucial role in driving new business and building strong relationships with potential clients. You'll be responsible for prospecting, qualifying leads, and converting them into satisfied customers.",
            applyLink: "https://wa.me/917230832703?text=Hi"
        },
        {
            position: "UX/UI Designer",
            description: "Are you a creative thinker with a passion for designing delightful user experiences? Join our design team and help shape the future of our products!",
            applyLink: "https://wa.me/917230832703?text=Hi"
        }
        // Add more job descriptions as needed
    ];

    return (
        <Layout>
            <div className="bg-black min-h-screen text-white">
                {/* Header Section */}
                <div className="relative">
                    <img
                        src="https://img.freepik.com/free-photo/hiring-concept-with-people-coming-together_23-2149519873.jpg" // Replace with your background image URL
                        alt="Career Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="relative bg-gray-900 text-white py-20 px-6 bg-opacity-75">
                        <div className="container mx-auto text-center">
                            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
                            <p className="text-lg mb-8">
                                Explore dynamic career opportunities with us and contribute to cutting-edge technology that’s transforming the industry.
                            </p>
                            <p className="text-lg mb-8">
                                Eager to be part of our innovative team? Submit your resume and cover letter to <a href="mailto:hr@yesboss.ai" className="underline">hr@yesboss.ai</a> and take the first step towards a rewarding career.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Job Openings Section */}
                <div className="container mx-auto py-12 px-6">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">Current Job Openings</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden text-white text-lg">
                            <thead className="bg-gray-700 text-gray-300">
                                <tr>
                                    <th className="py-4 px-6 font-semibold">Position</th>
                                    <th className="py-4 px-6 font-semibold">Description</th>
                                    <th className="py-4 px-6 font-semibold">Apply</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobDescriptions.map((job, index) => (
                                    <tr key={index} className="border-t border-gray-700">
                                        <td className="py-6 px-8 min-h-[80px] text-left">{job.position}</td>
                                        <td className="py-6 px-8 min-h-[80px] text-left">{job.description}</td>
                                        <td className="py-6 px-8 text-center min-h-[80px]">
                                            <a
                                                href={job.applyLink}
                                                className="inline-block bg-blue-500 hover:bg-black-600 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
                                            >
                                                Apply Now
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CareerPage;
