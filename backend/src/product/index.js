import { Router } from "express";
import { getProduct, CreatProduct } from "./productController.js";
import upload from "../../Middlewares/upload.js";

const router = Router();

router.get("/get", getProduct);
router.post("/create", upload.fields([{ name: "thumbnail" }]), CreatProduct);

export default router;
