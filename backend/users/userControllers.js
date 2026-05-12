import jwt from "jsonwebtoken";

export const createUsers = (req, res) => {
  try {
    const { name, email, password, user } = req.body;

    if (!email) {
      res.status(400).json({
        msg: "email required",
      });

      const payload = {
        name,
        email,
        role,
      };

      const Token = jwt.sign(payload, process.env.MYSECKEY, {
        expiresIn: "1h",
      });

      res.json({
        message: "Login successful",
        token,
      });
    }
  } catch (error) {}
};
