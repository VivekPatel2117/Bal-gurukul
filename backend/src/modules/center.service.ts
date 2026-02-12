import bcrypt from "bcrypt";
import { Center } from "./center.model";
import { User } from "./user/user.model";
import mongoose from "mongoose";

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


type UpdateCenterInput = {
  center_name?: string;
  center_address?: string;
  center_phone?: string;
  center_pincode?: string;
};

export const updateCenterService = async (
  id: string,
  data: UpdateCenterInput
) => {
  const center = await Center.findById(id);

  if (!center) {
    throw new Error("Center not found");
  }

  // If updating name, check duplicate
  if (data.center_name && data.center_name !== center.center_name) {
    const existingCenter = await Center.findOne({
      center_name: data.center_name,
    });

    if (existingCenter) {
      throw new Error("Center name already exists");
    }
  }

  const updatedCenter = await Center.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  )
    .populate("center_admins", "name username email role")
    .populate("users", "name username email");

  return updatedCenter;
};




export const deleteCenterService = async (id: string) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const center = await Center.findById(id).session(session);

    if (!center) {
      throw new Error("Center not found");
    }

    // Delete center admins
    if (center.center_admins.length > 0) {
      await User.deleteMany(
        { _id: { $in: center.center_admins } },
        { session }
      );
    }

    // Delete center users
    if (center.users.length > 0) {
      await User.deleteMany(
        { _id: { $in: center.users } },
        { session }
      );
    }

    // Delete center
    await Center.findByIdAndDelete(id).session(session);

    await session.commitTransaction();
    session.endSession();

    return true;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};