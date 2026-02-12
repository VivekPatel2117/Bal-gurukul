import { Router } from "express";
import {
  createCenter,
  getCenters,
  getCenterById,
  updateCenter,
  deleteCenter
} from "./center.controller";

const router = Router();

router.post("/", createCenter);
router.get("/", getCenters);
router.get("/:id", getCenterById);
router.put("/:id", updateCenter);
router.delete("/:id", deleteCenter);
export default router;
