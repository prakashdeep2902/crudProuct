import React from "react";
import ElectronicImage from "../../assets/categories/electronics.jpg"
import ToysImage from "../../assets/categories/toys.jpg"
import shirtImage from "../../assets/categories/shirt.png"
import homeAndKitchen from  "../../assets/categories/home-decore.webp"
import beauty from "../../assets/categories/beauty.png"
import sports from "../../assets/categories/sports.jpg"
import grocery from "../../assets/categories/grocery.webp"
import furniture from "../../assets/categories/furniture.png"
import phone from "../../assets/categories/phone.png"
import Toys from "../../assets/categories/toys1-removebg-preview.png"

const CategorySection = () => {
    const categories = [
        {
            name: "Electronics",
            image: ElectronicImage,
        },
        {
            name: "Toys & Games",
            image: Toys,
        },
        {
            name: "Fashion",
            image: shirtImage,
        },
        {
            name: "Home & Kitchen",
            image: homeAndKitchen,
        },
        {
            name: "Beauty & Personal Care",
            image: beauty,
        },
        {
            name: "Sports & Fitness",
            image: sports,
        },
        {
            name: "Grocery & Essentials",
            image: grocery,
        },
        {
            name: "Furniture",
            image: furniture,
        },
        {
            name: "Mobile Accessories",
            image: phone,
        },

    
    ];

  return (
    <section className="w-full bg-white py-6 px-4 md:px-8">
      
    
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-black">
          Shop by Category
        </h2>

        <button className="text-orange-500 text-sm font-medium hover:underline cursor-pointer">
          View all
        </button>
      </div>

   
      <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-hide">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-22.5 cursor-pointer group"
          >
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Text */}
            <p className="mt-3 text-sm font-medium text-gray-800 text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;