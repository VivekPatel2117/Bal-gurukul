import { Router } from "express";
import {
  createCenter,
  getCenters,
  getCenterById,
} from "./center.controller";

const router = Router();

router.post("/", createCenter);
router.get("/", getCenters);
router.get("/:id", getCenterById);

export default router;
