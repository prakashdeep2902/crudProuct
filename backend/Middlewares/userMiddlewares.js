import jwt from "jsonwebtoken";

export const Auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Token missing",
      });
    }
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.MYSECKEY);
    req.user = decode;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};
