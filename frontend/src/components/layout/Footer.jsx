import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t mt-10">
      
      {/* Top Section */}
      <div className="max-w-350 mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-black">Shop</span>
            <span className="text-orange-500">Kart</span>
          </h2>

          <p className="text-sm text-gray-500 mt-4 leading-6 max-w-62.5">
            Your one-stop destination for shopping the best
            products online at unbeatable prices.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            
            <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
              <FaFacebookF className="text-sm" />
            </div>

            <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
              <FaTwitter className="text-sm" />
            </div>

            <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
              <FaInstagram className="text-sm" />
            </div>

            <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
              <FaYoutube className="text-sm" />
            </div>

          </div>
        </div>

        {/* Shopping */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Shopping
          </h3>

          <ul className="space-y-3">
            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              All Categories
            </li>

            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Deals of the Day
            </li>

            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Best Sellers
            </li>

            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              New Arrivals
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Customer Service
          </h3>

          <ul className="space-y-3">
            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Contact Us
            </li>

            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Track Order
            </li>

            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Returns & Refunds
            </li>

            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              FAQs
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            My Account
          </h3>

          <ul className="space-y-3">
            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              My Orders
            </li>

            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Wishlist
            </li>

            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Profile
            </li>

            <li className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Address Book
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t">
        <div className="max-w-350 mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-gray-500">
            © 2024 ShopKart. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Terms of Use
            </span>

            <span className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </span>

            <span className="text-sm text-gray-500 hover:text-orange-500 cursor-pointer">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;