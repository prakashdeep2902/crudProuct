import express from "express";
import { CreateSellerUser } from "./contoller.js";
const router = express.Router();

router.post("/create", CreateSellerUser);

export default router;
