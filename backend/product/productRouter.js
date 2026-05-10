import { Router } from "express";
import { getProduct, CreatProduct, getQuery } from "./productController.js";

const router = Router();

router.get("/get", getProduct);
router.post("/post", CreatProduct);
router.post("/query/:category/:id", getQuery);

export default router;
