import { Router } from "express";
import * as loginController from "./login.controller";

const router = Router();

router.post("/", loginController.login);

export default router;
