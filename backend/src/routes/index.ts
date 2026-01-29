import { Router } from "express";
import userRoutes from "../modules/user/user.routes";
import loginRoutes from "../modules/login/login.routes";
const router = Router();

router.use("/users", userRoutes);
router.use("/login", loginRoutes);
export default router;
