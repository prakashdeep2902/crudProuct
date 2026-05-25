import { Router } from "express";
import { getProduct, CreatProduct } from "./productController.js";
import upload from "../../Middlewares/upload.js";

const router = Router();

router.get("/get", getProduct);
router.post(
  "/create",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "productImages", maxCount: 5 },
  ]),
  CreatProduct,
);

export default router;
