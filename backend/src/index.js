import express from "express";
const router = express.Router();
import users from "./users/index.js";
import Products from "./product/index.js";
import { Auth } from "../Middlewares/userMiddlewares.js";
import Seller from "./sellerusers/index.js";

const app = express();

app.use("/user", users);
app.use("/product", Products);
app.use("/seller", Seller);

export default app;
