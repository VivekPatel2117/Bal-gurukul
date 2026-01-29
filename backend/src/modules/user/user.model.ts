import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["SUPER_ADMIN", "CENTER_ADMIN", "user"], default: "user" },
    dob: { type: Date  },
    address: { type: String  },
    phone: { type: String  },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
