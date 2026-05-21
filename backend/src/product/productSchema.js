import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
    },
    brand: {
      type: String,
    },
    ProductImages: [String],
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    sku: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "Out of Stock", "Draft"],
    },
    stock: {
      type: String,
    },

    producttag: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Products = mongoose.model("products", productSchema);

export default Products;
