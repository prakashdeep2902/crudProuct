import React from "react";
import DashboardLayout from "../../components/seller/layout/DashboardLayout";
import ProductForm from "../../components/seller/product/ProductForm";

const Product = () => {
  return (
    <DashboardLayout title={"Add Products"}>
      <ProductForm />
    </DashboardLayout>
  );
};

export default Product;
