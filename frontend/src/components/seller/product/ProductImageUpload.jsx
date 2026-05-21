import React from "react";
import { UploadCloud } from "lucide-react";

const ProductImageUpload = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border">
      <h3 className="text-xl font-bold mb-6">Product Images</h3>

      <div className="border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-orange-400">
        <UploadCloud size={50} className="text-gray-400 mb-4" />
        <p className="font-semibold">Click to upload images</p>
        <p className="text-sm text-gray-500 mt-2">PNG, JPG, WEBP up to 5MB</p>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-5">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
          alt=""
          className="w-full h-20 object-cover rounded-lg"
        />

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt=""
          className="w-full h-20 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProductImageUpload;
