import { Schema, model, Types } from "mongoose";

const centerSchema = new Schema(
  {
    center_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    center_address: {
      type: String,
      required: true,
      trim: true,
    },

    center_phone: {
      type: String,
      required: true,
    },

    center_pincode: {
      type: String,
      required: true,
    },

    center_admins: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],

    users: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Center = model("Center", centerSchema);
