import mongoose from "mongoose";

const SellerUser = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    email: {
      type: String,
    },
    shopName: {
      type: String,
    },
    PhNumber: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Selleruser = mongoose.model("sellers", SellerUser);

export default Selleruser;
