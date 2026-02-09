import { User } from "./user.model";
import bcrypt from "bcrypt";
export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
  username: string;
  role?: string;
  dob: Date;
  address: string;
  phone: string;
}) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;
  return User.create(data);
};

export const getUsers = async () => {
  return User.find();
};

export const getUserById = async (id: string) => {
  return User.findById(id);
};

export const updateUser = async (id: string, data: Partial<{ name: string; email: string; }>) => {
  return User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id: string) => {
  return User.findByIdAndDelete(id);
};