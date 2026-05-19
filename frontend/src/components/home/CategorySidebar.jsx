import React from "react";

import {
  FiMonitor,
  FiShoppingBag,
  FiHome,
  FiHeart,
  FiTruck,
  FiGrid,
} from "react-icons/fi";

const categories = [
  {
    name: "Electronics",
    icon: <FiMonitor />,
  },
  {
    name: "Fashion",
    icon: <FiShoppingBag />,
  },
  {
    name: "Home & Kitchen",
    icon: <FiHome />,
  },
  {
    name: "Beauty & Personal Care",
    icon: <FiHeart />,
  },
  {
    name: "Automotive",
    icon: <FiTruck />,
  },
  {
    name: "More Categories",
    icon: <FiGrid />,
  },
];

const CategorySidebar = () => {
  return (
    <div className="w-65 bg-white rounded-2xl border border-gray-200 p-5">
      {/* Heading */}
      <h2 className="text-orange-500 font-semibold text-lg mb-6">
        All Categories
      </h2>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-orange-50 cursor-pointer transition-all"
          >
            <span className="text-2xl text-gray-500">{item.icon}</span>

            <span className="text-gray-700 font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
