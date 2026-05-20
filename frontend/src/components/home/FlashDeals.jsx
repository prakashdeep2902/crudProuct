import React from "react";
import OfferBanner from "./OfferBanner";

const FlashDeals = () => {
  const products = [
    {
      title: "boAt Rockerz 450 Headphones",
      image: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
      price: "$29.99",
      oldPrice: "$39.99",
      rating: "4.5",
      discount: "-25%",
    },
    {
      title: "Fire-Boltt Ninja Smartwatch",
      image: "https://cdn-icons-png.flaticon.com/512/1067/1067566.png",
      price: "$34.99",
      oldPrice: "$49.99",
      rating: "4.4",
      discount: "-30%",
    },
    {
      title: "Safari Backpack Basic",
      image: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
      price: "$23.99",
      oldPrice: "$39.99",
      rating: "4.6",
      discount: "-20%",
    },
    {
      title: "Adidas Men White Sneakers",
      image: "https://cdn-icons-png.flaticon.com/512/2589/2589903.png",
      price: "$67.99",
      oldPrice: "$89.99",
      rating: "4.3",
      discount: "-15%",
    },
    {
      title: "Perfume",
      image: "https://cdn-icons-png.flaticon.com/512/2745/2745060.png",
      price: "$19.99",
      oldPrice: "$29.99",
      rating: "4.2",
      discount: "-35%",
    },
    {
      title: "Men Slim Fit Jeans",
      image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
      price: "$35.99",
      oldPrice: "$50.99",
      rating: "4.1",
      discount: "-35%",
    },
  ];
  return (
    <section className="w-full bg-white rounded-xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-black">Flash Deals</h2>

          {/* Timer */}
          <div className="flex items-center gap-1">
            <span className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded">
              02
            </span>

            <span className="text-red-500 font-bold">:</span>

            <span className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded">
              15
            </span>

            <span className="text-red-500 font-bold">:</span>

            <span className="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded">
              45
            </span>
          </div>
        </div>

        <button className="text-orange-500 text-sm font-medium hover:underline">
          View all deals
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-3 relative hover:shadow-md transition-all duration-300"
          >
            {/* Discount Badge */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-semibold px-2 py-1 rounded">
              {item.discount}
            </span>

            {/* Product Image */}
            <div className="flex justify-center mb-4 mt-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* Product Title */}
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-10">
              {item.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500 text-sm">★</span>

              <span className="text-xs text-gray-600">{item.rating}</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-bold text-black">{item.price}</span>

              <span className="text-sm text-gray-400 line-through">
                {item.oldPrice}
              </span>
            </div>

            {/* Button */}
            <button className="w-full mt-4 border border-orange-400 text-orange-500 text-sm font-medium py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <OfferBanner />
    </section>
  );
};

export default FlashDeals;
