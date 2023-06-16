import { Router } from "express";

import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";
import personRoutes from "./personRoutes.js";

const router = Router();

router.get("/", (req, res) =>
  res.status(200).json({
    success: true,
    message: "Hi",
  })
);

router.use("/user", userRoutes);

router.use("/product", productRoutes);

router.use("/person", personRoutes);

export default router;
