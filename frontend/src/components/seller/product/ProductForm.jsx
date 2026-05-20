import React from "react";
import ProductInformation from "./ProductInformation";
import ProductImageUpload from "./ProductImageUpload";
import ProductDescription from "./ProductDescription";
import ProductStatus from "./ProductStatus";
import ProductActions from "./ProductActions";

const ProductForm = () => {
  return (
    <div>

      <div className="grid grid-cols-12 gap-6">

        {/* Left Side */}
        <div className="col-span-8 space-y-6">

          <ProductInformation />

          <ProductDescription />

        </div>

        {/* Right Side */}
        <div className="col-span-4 space-y-6">

          <ProductImageUpload />

          <ProductStatus />

        </div>

      </div>

      <ProductActions />

    </div>
  );
};

export default ProductForm;