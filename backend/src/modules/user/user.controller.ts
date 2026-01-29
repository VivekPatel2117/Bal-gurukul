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

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserService.getUsers();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUserById(req.params.id as string);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Invalid user ID" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.updateUser(req.params.id as string, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Invalid user ID" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.deleteUser(req.params.id as string);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid user ID" });
  }
};

