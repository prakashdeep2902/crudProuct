import React from "react";

const ProductInput = ({ label, placeholder, handelChange, Value, name }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        value={Value}
        name={name}
        className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
        onChange={handelChange}
      />
    </div>
  );
};

export default ProductInput;
