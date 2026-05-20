import React from "react";

const OfferBanner = () => {
  const offers = [
    {
      title: "Latest Electronics",
      discount: "Up to 40% Off",
      image: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
      bg: "bg-green-100",
    },
    {
      title: "Fashion Collection",
      discount: "Min. 30% Off",
      image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
      bg: "bg-blue-100",
    },
    {
      title: "Beauty Essentials",
      discount: "Up to 50% Off",
      image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
      bg: "bg-pink-100",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {offers.map((item, index) => (
        <div
          key={index}
          className={`${item.bg} rounded-xl p-5 flex items-center justify-between overflow-hidden`}
        >
          {/* Left Content */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-2xl font-bold text-gray-800 mt-1">
              {item.discount}
            </p>

            <button className="mt-4 text-sm font-medium text-black hover:underline">
              Shop Now →
            </button>
          </div>

          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-28 h-28 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default OfferBanner;
