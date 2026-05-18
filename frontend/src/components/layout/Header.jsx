import React from "react";

import { FiHeart, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm ">
      <div className="max-w-8xl mx-auto px-6 h-24 flex items-center justify-between border-2 border-blue-500">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 border-2 border-orange-500 rounded-md"></div>

          <h1 className="text-4xl font-bold">
            Shop<span className="text-orange-500">Kart</span>
          </h1>
        </div>

        <div className="flex items-center w-[550px] border border-gray-300 rounded-xl overflow-hidden">
          {/* Categories */}
          <select className="h-14 px-4 bg-gray-50 border-r border-gray-300 outline-none text-gray-600">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Furniture</option>
          </select>

          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-5 outline-none text-gray-700"
          />

          <button className="w-16 h-14 bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white text-2xl transition-all">
            <FiSearch />
          </button>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
            <FiHeart className="text-2xl" />

            <span className="text-lg font-medium">Wishlist</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
            <FiUser className="text-2xl" />

            <div className="leading-5">
              <p className="text-sm text-gray-500">Hi, John</p>

              <p className="font-medium">My Account</p>
            </div>
          </div>

          <div className="relative flex items-center gap-2 cursor-pointer hover:text-orange-500">
            <FiShoppingCart className="text-3xl" />

            <span className="absolute -top-2 left-5 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>

            <span className="text-lg font-medium">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
