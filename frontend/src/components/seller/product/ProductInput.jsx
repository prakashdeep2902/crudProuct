import React from "react";

const ProductInput = ({
  label,
  placeholder,
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
};

export default ProductInput;