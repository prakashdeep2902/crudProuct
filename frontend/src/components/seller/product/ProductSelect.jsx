import React from "react";

const ProductSelect = ({ label }) => {
  return (
    <div>

      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>

      <select className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400">

        <option>Select Category</option>

        <option>Electronics</option>

        <option>Fashion</option>

        <option>Home</option>

      </select>

    </div>
  );
};

export default ProductSelect;