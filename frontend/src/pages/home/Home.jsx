import React from "react";
import Header from "../../components/layout/Header";
import HeroSection from "../../components/home/HeroSection";
import ServiceFeatures from "../../components/home/ServiceFeatures";
import CategorySection from "../../components/home/CategorySection";
import FlashDeals from "../../components/home/FlashDeals";
import BestSelling from "../../components/home/BestSelling";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
     <Header />
      <div className="min-h-screen max-w-[95%] mt-6 mx-auto ">
        <HeroSection />
        <ServiceFeatures/>
        <CategorySection/>
        <FlashDeals/>
        <BestSelling/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
