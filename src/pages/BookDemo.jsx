
import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    database_name: "yb_db",
    collection_name: "yb_web_queries",
    new_data: {
        name: "",
        email: "",
        phone_number: "",
        business_name: ""
    }
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      new_data:{...formData.new_data,
        [e.target.name]: e.target.value,
      }
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://ankitagro.yesbossyes.com/django/insert_dynamic_document",formData);
      console.log(response)
      setFormData({
        ...formData,
        new_data: {
            name: "",
            email: "",
            phone_number: "",
            business_name: ""
        }})
      // console.log("Form submitted successfully:", response.data);
      alert("Request sent successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("Failed to submit the form. Please try again later.");
    }
  }


console.log(formData)
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
        <div className="bg-white flex flex-col lg:flex-row rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center bg-black text-white">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-4 text-center">
              We would love to hear from you! Whether you have a question about
              features, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>
            <LazyLoadImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQH6P5PfKGs7Ai3U8yfrl2xt_BK4lu1xROA&s"
              alt="Contact Us"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-white">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-black"
                  value={formData.new_data.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-black"
                  value={formData.new_data.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone_number"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-black"
                  value={formData.new_data.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="businessName" className="block text-gray-600 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="business_name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-black"
                  value={formData.new_data.business_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactForm;
