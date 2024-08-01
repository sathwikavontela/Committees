import mongoose, { Schema } from "mongoose";
const FeedbackSchema = new Schema(
  {
    committee_name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    department: {
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

export const Feedback = mongoose.model("Feedback", FeedbackSchema);
