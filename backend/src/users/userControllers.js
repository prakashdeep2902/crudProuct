import jwt from "jsonwebtoken";
import User from "./userSchema.js";

export const createUsers = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        msg: "Email required",
      });
    }

    if (!password) {
      return res.status(400).json({
        msg: "Password required",
      });
    }

    // JWT Payload
    const payload = {
      name,
      email,
      role,
      password,
    };

    const user = await User.create(payload);

    res.status(200).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
    });
  }
};

export const loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "Email and password required",
      });
    }
    const user = await User.findOne({
      email,
      password,
    });
    if (!user) {
      return res.status(404).json({
        msg: "User Not Found",
      });
    }

    const payload = {
      email,
    };

    const token = jwt.sign(payload, process.env.MYSECKEY, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      msg: "login successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};
