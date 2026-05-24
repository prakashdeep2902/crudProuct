import React from "react";
import ProductInput from "./ProductInput";
import ProductSelect from "./ProductSelect";
import ProductThumbnail from "./ProductThumbnail";

const ProductInformation = ({ handelChange, productData, setProductData }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border">
      <h3 className="text-xl font-bold mb-6">Product Information</h3>

      <div className="grid grid-cols-2 gap-5">
        <ProductInput
          label="Product Name"
          name="productname"
          placeholder="Enter product name"
          Value={productData.productname}
          handelChange={handelChange}
        />
        <ProductSelect
          label="Category"
          name="category"
          Value={productData.category}
          handelChange={handelChange}
        />
        <ProductInput
          label="Brand"
          name="brand"
          placeholder="Enter brand"
          Value={productData.brand}
          handelChange={handelChange}
        />

        <ProductInput
          label="Price"
          name="price"
          placeholder="Enter price"
          Value={productData.price}
          handelChange={handelChange}
        />

        <ProductInput
          label="Sale Price"
          name="saleprice"
          placeholder="Enter sale price"
          Value={productData.saleprice}
          handelChange={handelChange}
        />

        <ProductInput
          label="SKU"
          name="sku"
          placeholder="Enter SKU"
          Value={productData.sku}
          handelChange={handelChange}
        />

        <ProductInput
          label="Stock"
          name="stock"
          placeholder="Enter stock"
          Value={productData.stock}
          handelChange={handelChange}
        />

        <ProductInput
          label="Product Tags"
          name="producttag"
          placeholder="Enter tags"
          Value={productData.producttag}
          handelChange={handelChange}
        />
      </div>
      <ProductThumbnail
        label="Product Thumbnail"
        name="productthumbnail"
        setProductData={setProductData}
        Value={productData.thumbnail}
      />
    </div>
  );
};

export default ProductInformation;
