import React, { useState, useEffect } from "react";
import CompanyPartners from "../components/featureBrand/CompanyPartners";
import OurServices from "../components/OurServices";
import Integration from "../components/Integration";
import PromotionalMessages from "../components/PromotionalBanner";
import ChatButton from "../components/Chatbot/ChatButton";
import AboutServices from "../components/AboutServices";
import Testimonial from "../components/Testimonial";
import Info from "../components/Info";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import Loading from "../components/Loading"; // Import the Loading component

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the page has been loaded before
    if (sessionStorage.getItem('pageLoaded')) {
      setIsLoading(false);
    } else {
      // Simulate a loading delay on first load
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('pageLoaded', 'true'); // Set the flag in sessionStorage
      }, 2000); // Adjust the time as needed

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <HeroSection />
      <CompanyPartners />
      <OurServices />
      <AboutServices />
      <Info />
      <Integration />
      <PromotionalMessages />
      <Testimonial />
      <ChatButton />
    </Layout>
  );
}

export default Home;