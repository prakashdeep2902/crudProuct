import jwt from "jsonwebtoken";
import Selleruser from "./model.js";
import bcrypt from "bcrypt";

export const CreateSellerUser = async (req, res) => {
  try {
    const values = req.body;
    if (!values.name && !values.password) {
      return (
        res.status(400),
        json({
          msg: "name and password required",
        })
      );
    }

    const hashedPassword = await bcrypt.hash(values.password, 10);

    const newValues = new Object({
      Name: values.fullName,
      email: values.email,
      shopName: values.shopname,
      PhNumber: values.phonenumber,
      password: hashedPassword,
    });

    const response = await Selleruser.create(newValues);

    return res.status(201).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
    });
  }
};

export const loginSellerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        error: "email and password not found",
      });
    }

    const existSellerUser = await Selleruser.findOne({
      email,
    });

    if (!existSellerUser) {
      return res.status(400).json({
        error: "user is not found",
      });
    }

    const isMatch = await bcrypt.compare(password, existSellerUser.password);

    if (!isMatch) {
      return res.status(400).json({
        error: "email and password is not matched",
      });
    }

    const payload = {
      id: existSellerUser._id,
      name: existSellerUser.Name,
      email: existSellerUser.email,
    };

    const token = await jwt.sign(payload, process.env.MYSECKEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      status: 200,
      user: payload,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
