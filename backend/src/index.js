import express from "express";
const router = express.Router();
import users from "./users/index.js";
import Products from "./product/index.js";
import { Auth } from "../Middlewares/userMiddlewares.js";

const app = express();

app.use("/user", users);
app.use("/product", Auth, Products);

export default app;
