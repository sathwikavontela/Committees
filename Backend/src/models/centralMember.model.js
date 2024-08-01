import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const centralSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      default: "studen tName",
    },
    department: {
      type: String,
      default: "department",
    },
    committee_name: {
      type: String,
      required: true,
    },
    Id_number: {
      type: String,
      default: "B1XXXXX",
    },
    role: {
      type: String,
      enum: ["central", "department"],
      default: "central",
    },
    image_url: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIGVupSyE17k0s5mH43ut12XoKYUgKCi6bQ&s",
    },
  },
  { timestamps: true }
);

centralSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

centralSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

centralSchema.methods.generateAccessToken = function () {
  try {
    const token = jwt.sign(
      {
        _id: this._id,
        username: this.username,
        committee_name: this.committee_name,
      },
      process.env.CENTRAL_TOKEN_SECRET,
      {
        expiresIn: 432000,
      }
    );
    return token;
  } catch (error) {
    console.log("Error generating central token:", error);
  }
};

export const Central = mongoose.model("CentralMember", centralSchema);
