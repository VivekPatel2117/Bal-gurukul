import { Request, Response } from "express";
import * as UserService from "../user/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await UserService.User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id, role: user.role}, process.env.JWT_SECRET || "your-secret-key", { expiresIn: "1h" });
        res.json({ message: "Login successful", user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
