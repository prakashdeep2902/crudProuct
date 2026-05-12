import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      validate: {
        validator: function (value) {
          return value.includes("@");
        },
        message: "Invalid email format",
      },
    },
    Price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Products = mongoose.model("products", productSchema);

export default Products;
