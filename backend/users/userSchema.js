import express from "express";
import mongoose from "mongoose";

const UserSchema = new mongosse.schema({
  name: {
    type: String,
    maxLength: 18,
  },
  email: {
    type: String,
    validate: {
      validator: function (value) {
        return value.include("@");
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

export default user;
