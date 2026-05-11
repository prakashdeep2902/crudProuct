import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    requier: true,
  },
  Price: {
    type: Number,
    requier: true,
  },
  category: {
    type: String,
    requier: true,
  },
});

const Products = mongoose.model("products", productSchema);

export default Products;
