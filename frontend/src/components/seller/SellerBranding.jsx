import React from "react";
import {
  FaCheckCircle,
  FaStore,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

import sellerImage from "../../assets/seller/sellerImage-removebg-preview.png";
import logo from "../../assets/seller/baglogo-removebg-preview.png";

const SellerBranding = () => {
  return (
    <div className="w-full max-w-lg">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <img
          src={logo}
          alt="ShopKart Logo"
          className="w-12 h-12 object-contain"
        />

        <div>
          <h2 className="text-2xl font-bold">
            Shop<span className="text-orange-500">Kart</span>
          </h2>

          <p className="text-sm text-gray-500">
            Seller Panel
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          Grow Your Business
          <br />
          With{" "}
          <span className="text-orange-500">
            ShopKart
          </span>
        </h1>

        <p className="mt-5 text-lg text-gray-600 leading-relaxed">
          Create your seller account and start selling
          to millions of customers across India.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-5 mb-12">

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <FaStore className="text-orange-500 text-lg" />
          </div>

          <p className="text-gray-700 font-medium">
            List your products easily
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <FaChartLine className="text-orange-500 text-lg" />
          </div>

          <p className="text-gray-700 font-medium">
            Reach millions of customers
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <FaCheckCircle className="text-orange-500 text-lg" />
          </div>

          <p className="text-gray-700 font-medium">
            Grow your business online
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <FaHeadset className="text-orange-500 text-lg" />
          </div>

          <p className="text-gray-700 font-medium">
            24/7 Seller Support
          </p>
        </div>

      </div>

      {/* Illustration */}
      <div className="flex justify-center">
        <img
          src={sellerImage}
          alt="Seller Illustration"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default SellerBranding;