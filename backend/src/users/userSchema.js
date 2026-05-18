import express from "express";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 200,
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
  password: {
    type: String,
  },
  role: {
    type: String,
    default: "User",
  },
});

const User = mongoose.model("Users", UserSchema);

export default User;
