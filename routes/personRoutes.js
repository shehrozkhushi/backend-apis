import { Router } from "express";
import personController from "../controllers/personController.js";

const router = Router();

router.post("/", personController.createPerson);

export default router;
