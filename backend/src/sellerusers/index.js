import express from "express";
import { CreateSellerUser, loginSellerUser } from "./contoller.js";
const router = express.Router();

router.post("/create", CreateSellerUser);
router.post("/login", loginSellerUser);

export default router;
