import React from "react";

import {
  FiTruck,
  FiRefreshCw,
  FiLock,
  FiHeadphones,
} from "react-icons/fi";

const ServiceFeatures = () => {
  return (
    <section className="max-w-full mx-auto px-6 mt-6">

      <div className="bg-white border border-gray-200 rounded-2xl grid grid-cols-4 overflow-hidden">

        <div className="flex items-center gap-4 p-6">

          <div className="w-16 h-16 rounded-full border flex items-center justify-center text-3xl text-gray-700">
            <FiTruck />
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Free Shipping
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              On orders over ₹50
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 border-l border-gray-200">

          <div className="w-16 h-16 rounded-full border flex items-center justify-center text-3xl text-gray-700">

            <FiRefreshCw />

          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Easy Returns
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              30 days return policy
            </p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="flex items-center gap-4 p-6 border-l border-gray-200">

          <div className="w-16 h-16 rounded-full border flex items-center justify-center text-3xl text-gray-700">

            <FiLock />

          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Secure Payment
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              100% secure payment
            </p>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="flex items-center gap-4 p-6 border-l border-gray-200">

          <div className="w-16 h-16 rounded-full border flex items-center justify-center text-3xl text-gray-700">

            <FiHeadphones />

          </div>

          <div>
            <h3 className="text-lg font-semibold">
              24/7 Support
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;