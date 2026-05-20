import React from "react";
import ProductInput from "./ProductInput";
import ProductSelect from "./ProductSelect";

const ProductInformation = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border">

      <h3 className="text-xl font-bold mb-6">
        Product Information
      </h3>

      <div className="grid grid-cols-2 gap-5">

        <ProductInput
          label="Product Name"
          placeholder="Enter product name"
        />

        <ProductSelect
          label="Category"
        />

        <ProductInput
          label="Brand"
          placeholder="Enter brand"
        />

        <ProductInput
          label="Price"
          placeholder="Enter price"
        />

        <ProductInput
          label="Sale Price"
          placeholder="Enter sale price"
        />

        <ProductInput
          label="SKU"
          placeholder="Enter SKU"
        />

        <ProductInput
          label="Stock"
          placeholder="Enter stock"
        />

        <ProductInput
          label="Product Tags"
          placeholder="Enter tags"
        />

      </div>
    </div>
  );
};

export default ProductInformation;