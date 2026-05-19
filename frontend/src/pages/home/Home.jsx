import React from "react";
import Header from "../../components/layout/Header";
import HeroSection from "../../components/home/HeroSection";

const Home = () => {
  return (
    <>
     
  
     <Header />
      <div className="min-h-screen max-w-[95%] mt-6">
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
