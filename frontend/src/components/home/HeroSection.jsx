import React from "react";

import CategorySidebar from "./CategorySidebar";

const HeroSection = () => {
  return (
    <section className=" mx-auto px-6">
      <div className="flex gap-6">
        <CategorySidebar />
        <div className="flex-1 bg-[#ffe9dc] rounded-3xl overflow-hidden h-125 flex items-center justify-between px-16">
          <div>
            <span className="bg-[#ffd6bf] text-orange-500 px-5 py-2 rounded-full text-sm font-semibold">
              BIGGEST SALE OF THE YEAR
            </span>

            <h1 className="text-7xl font-bold text-gray-900 leading-22.5 mt-8">
              Summer Sale
              <br />
              Up to <span className="text-orange-500">60% Off</span>
            </h1>

            <p className="text-gray-600 text-xl mt-6 leading-9">
              Get amazing deals on top brands and best products.
            </p>

            {/* Button */}
            <button className="mt-10 bg-orange-500 hover:bg-orange-600 transition-all text-white px-10 h-16 rounded-2xl text-xl font-semibold">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="flex items-center gap-6">
            <img
              src="https://pngimg.com/d/running_shoes_PNG5823.png"
              alt="shoe"
              className="w-75"
            />

            <img
              src="https://pngimg.com/d/watches_PNG9863.png"
              alt="watch"
              className="w-45"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
