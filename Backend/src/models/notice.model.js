import mongoose, { mongo, Schema } from "mongoose";
const noticeSchema = new Schema(
  {
    committee_name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Notice = mongoose.model("Notice", noticeSchema);
