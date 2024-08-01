import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    sender_id: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    department: {
      type: String,
    },
    committee_name: {
      type: String,
    },
    role: {
      type: String,
      enum: ["central", "department"],
      default: "department",
    },
    user_ids: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
