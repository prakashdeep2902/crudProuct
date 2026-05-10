import { Router } from "express";
import { getProduct, CreatProduct } from "./productController.js";

const router = Router();

router.get("/get", getProduct);
router.post("/post", CreatProduct);

export default router;
