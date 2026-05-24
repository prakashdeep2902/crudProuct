import React from "react";

const ProductStatus = ({ handelChange, Value }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border">
      <h3 className="text-xl font-bold mb-6">Status</h3>
      <select
        className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
        value={Value}
        onChange={handelChange}
        name="status"
      >
        <option defaultValue={"active"} value="active">
          Active
        </option>
        <option value="draft">Draft</option>
        <option value="out of stock">Out Of Stock</option>
      </select>
    </div>
  );
};

export default ProductStatus;
