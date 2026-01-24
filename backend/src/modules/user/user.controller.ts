import { Request, Response } from "express";
import * as UserService from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "User creation failed" });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await UserService.getUsers();
  res.json(users);
};
