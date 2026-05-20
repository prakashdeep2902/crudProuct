import React from "react";

const ProductDescription = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border">

      <h3 className="text-xl font-bold mb-6">
        Product Description
      </h3>

      <textarea
        rows="8"
        placeholder="Write product description..."
        className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-orange-400"
      />

    </div>
  );
};

export default ProductDescription;