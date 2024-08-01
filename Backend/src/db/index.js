import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.log("MongoDB connection error");
  }
};
export default connectDB;
