import { Router } from "express";
import userRoutes from "../modules/user/user.routes";
import loginRoutes from "../modules/login/login.routes";
import centerRoutes from "../modules/center.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/login", loginRoutes);
router.use("/centers", centerRoutes);
export default router;
