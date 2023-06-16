import { Router } from "express";
import usersController from "../controllers/usersController.js";

const router = Router();

router.get("/", usersController.getAllUser);

router.get("/:name", usersController.getUserByName);

export default router;
