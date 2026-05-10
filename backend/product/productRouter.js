import { Router } from "express";
import { getProduct } from "./productController.js";

const router = Router();

router.get("/get", auth, getProduct);

function auth(req, res, next) {
  try {
    console.log("checking login or not");
    next();
  } catch (error) {}
}

export default router;
