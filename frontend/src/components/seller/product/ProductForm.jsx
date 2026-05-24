import React, { useState } from "react";
import ProductInformation from "./ProductInformation";
import ProductImageUpload from "./ProductImageUpload";
import ProductDescription from "./ProductDescription";
import ProductStatus from "./ProductStatus";
import ProductActions from "./ProductActions";
import { productCreate } from "../../../services/authService";
import { useDispatch } from "react-redux";
import { showMsg } from "../../../redux/msgSlice";

const ProductForm = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    productname: "",
    category: "",
    saleprice: "",
    sku: "",
    stock: "",
    brand: "",
    price: "",
    description: "",
    producttag: "",
    status: "",
    thumbnail: {},
  });

  const handelChange = (e) => {
    const { value, name } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelProductSave = async (e) => {
    e.preventDefault();
    console.log("productData:::::===>", productData);
    try {
      const res = await productCreate(productData);
      if (res.status == 200) {
        setProductData({
          productname: "",
          category: "",
          saleprice: "",
          sku: "",
          stock: "",
          brand: "",
          price: "",
          description: "",
          producttag: "",
          status: "",
          thumbnail: {},
        });
        dispatch(
          showMsg({
            message: "Product created successfully",
            type: "success",
          }),
        );
      }
    } catch (error) {
      dispatch(
        showMsg({
          message: "something error",
          type: "error",
        }),
      );
    }
  };

  const handelCancel = () => {
    setProductData({
      productname: "",
      category: "",
      saleprice: "",
      sku: "",
      stock: "",
      brand: "",
      price: "",
      description: "",
      producttag: "",
      status: "",
      thumbnail: {},
    });
    dispatch(
      showMsg({
        message: "cancel the product creation",
        type: "error",
      }),
    );
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <ProductInformation
            handelChange={handelChange}
            productData={productData}
            setProductData={setProductData}
            productData={productData}
          />
          <ProductDescription
            handelChange={handelChange}
            Value={productData.description}
          />
        </div>

        <div className="col-span-4 space-y-6">
          <ProductImageUpload />
          <ProductStatus
            handelChange={handelChange}
            Value={productData.status}
          />
        </div>
      </div>

      <ProductActions
        handelProductSave={handelProductSave}
        handelCancel={handelCancel}
      />
    </div>
  );
};

export default ProductForm;
