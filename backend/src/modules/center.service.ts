import bcrypt from "bcrypt";
import { Center } from "./center.model";
import { User } from "./user/user.model";

type CreateCenterInput = {
  center_name: string;
  center_address: string;
  center_phone: string;
  center_pincode: string;

  name: string;
  username: string;
  email: string;
  password: string;
  dob?: Date;
  address?: string;
  phone?: string;
};

export const createCenterService = async (data: CreateCenterInput) => {
  const existingCenter = await Center.findOne({
    center_name: data.center_name,
  });

  if (existingCenter) {
    throw new Error("Center already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const centerAdmin = await User.create({
    name: data.name,
    username: data.username,
    email: data.email,
    password: hashedPassword,
    role: "CENTER_ADMIN",
    dob: data.dob,
    address: data.address,
    phone: data.phone,
  });

  const center = await Center.create({
    center_name: data.center_name,
    center_address: data.center_address,
    center_phone: data.center_phone,
    center_pincode: data.center_pincode,
    center_admins: [centerAdmin._id],
    users: [],
  });

  return center;
};

export const getCentersService = async () => {
  return Center.find()
    .populate("center_admins", "name username email role")
    .populate("users", "name username email");
};

export const getCenterByIdService = async (id: string) => {
  return Center.findById(id)
    .populate("center_admins", "name username email role")
    .populate("users", "name username email");
};
