import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./product/productRouter.js";
const app = express();
app.use("/api", router);

const port = process.env.port;
app.listen(port, () => {
  console.log(`server is running on port Number ${port}`);
});
