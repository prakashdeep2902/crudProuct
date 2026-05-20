import React from 'react'
import { Mail } from "lucide-react";

const Newsletter = () => {
 return (
    <section className="w-full bg-gray-50 rounded-2xl px-6 py-6 mt-8 border">
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl border bg-white flex items-center justify-center">
            <Mail className="w-7 h-7 text-gray-600" />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold text-black">
              Subscribe to our newsletter
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Get updates on new arrivals, deals and more
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center w-full lg:w-120 gap-3">
          
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-12 px-4 rounded-lg border outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter