import { Router } from "express";
import productsController from "../controllers/productsController.js";

const router = Router();

router.get("/", productsController.getAllProducts);

router.post("/:id", productsController.getProductById);

export default router;
