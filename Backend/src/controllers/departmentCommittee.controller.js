import { Central } from "../models/centralMember.model.js";
import { Department } from "../models/departmentCommittee.model.js";
import { Incharge } from "../models/incharge.model.js";

const createDepartmentMember = async (req, res) => {
  try {
    //getting the inputs from the user
    const { username, password, fullName, department, committee_name, role } =
      req.body;

    //checking if all the fields are there or not
    if (!username || !password || !department || !committee_name) {
      return res
        .status(400)
        .json({ message: "All fields which are marked * are must" });
    }
    const existedDepartmentMember = await Department.findOne({ username });
    if (existedDepartmentMember)
      return res.status(400).json({ message: "you are already registered" });

    //creating the new admin
    const newDepartmentMember = await Department.create({
      fullName,
      username,
      password,
      department,
      committee_name,
      role,
    });

    // console.log(newDepartmentMember);
    //checking if the new Admin is created or not
    const createdDepartmentMember = await Department.findById(
      newDepartmentMember._id
    ).select("-password");
    if (!createdDepartmentMember) {
      return res.status(500).json({
        message: "Something went wrong while creating the department member",
      });
    }

    //all are correct
    return res
      .status(200)
      .json({ message: "New Department Member registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

const getDepartmentMember = async (req, res) => {
  try {
    const { committee_name, department } = req.member;
    const members = await Department.find({ committee_name, department });
    const userIds = members.map((member) => member._id);
    return res.status(200).json({ user: req.member, userIds });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const departments = ["cse", "ece", "eee", "mech", "civil", "mme", "chem"]; // List of departments

const usersData = departments.flatMap((department) =>
  Array.from({ length: 4 }, (_, index) => ({
    username: `${department}excellence${index + 1}`,
    password: "rgukt123",
    fullName: "Student Name",
    committee_name: "excellence",
    Id_number: "BXXXXXX",
    department: department,
  }))
);

const createBulk = async (req, res) => {
  try {
    for (let userData of usersData) {
      // Assuming User.create() is a method to create users in your model
      await Department.create(userData);
      console.log(`Created user: ${userData.username}`);
    }
    console.log("Bulk user creation completed.");
    return res.status(200).json({ message: "completed" });
  } catch (error) {
    console.error("Error creating users:", error);
  }
};

const loginDepartmentMember = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });
  let member;
  if (username.startsWith("central")) {
    member = await Central.findOne({ username });
    if (!member)
      return res.status(400).json({ message: "you are not authorized" });
    const isPasswordValid = await member.isPasswordCorrect(password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "your password is not valid" });
    const centralToken = await member.generateAccessToken();
    const options = {
      httpOnly: true,
      secure: true, // Ensure this is true if using HTTPS
      sameSite: "None",
    };
    return res
      .status(200)
      .cookie("centralToken", centralToken, options)
      .json({ member: member, centralToken });
  } else if (username.endsWith("incharge")) {
    member = await Incharge.findOne({ username });
    if (!member)
      return res.status(400).json({ message: "you are not authorized" });
    const isPasswordValid = await member.isPasswordCorrect(password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "your password is not valid" });
    const inchargeToken = await member.generateAccessToken();
    const options = {
      httpOnly: true,
      secure: true, // Ensure this is true if using HTTPS
      sameSite: "None",
    };
    return res
      .status(200)
      .cookie("inchargeToken", inchargeToken, options)
      .json({ member: member, inchargeToken });
  } else {
    member = await Department.findOne({ username });
    if (!member)
      return res.status(400).json({ message: "you are not authorized" });
    const isPasswordValid = await member.isPasswordCorrect(password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "your password is not valid" });
    const departmentToken = await member.generateAccessToken();
    const options = {
      httpOnly: true,
      secure: true, // Ensure this is true if using HTTPS
      sameSite: "None",
    };
    return res
      .status(200)
      .cookie("departmentToken", departmentToken, options)
      .json({ member: member, departmentToken });
  }
};

const updateDepartmentMember = async (req, res) => {
  try {
    const { _id } = req.member;
    console.log(_id);
    const { fullName, Id_number, password, image_url } = req.body;
    console.log("data from the request", fullName, Id_number, password);
    if (!fullName && !Id_number && !password && !image_url) {
      return res
        .status(400)
        .json({ message: "atleast one change is required" });
    }
    let departmentMember = await Department.findById(_id);
    if (fullName) departmentMember.fullName = fullName;
    if (Id_number) departmentMember.Id_number = Id_number;
    if (password) departmentMember.password = password;
    if (image_url) departmentMember.image_url = image_url;
    await departmentMember.save();
    return res
      .status(200)
      .json({ message: "updated successfully", member: departmentMember });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getCommitteMembers = async (req, res) => {
  try {
    const { committee_name } = req.body;
    if (!committee_name)
      return res.status(400).json({ message: "committee name is required" });
    const MembesArray = await Department.find({ committee_name });
    if (!MembesArray)
      return res.status(400).json({ message: "no records found" });
    return res.status(200).json({ MembesArray });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const fetchParticularDepartment = async (req, res) => {
  try {
    const { department, committee_name } = req.member;
    console.log("your committe name is ", committee_name);
    const MembersArray = await Department.find({ department, committee_name });
    if (!MembersArray)
      return res.status(400).json({ message: "No committee members found" });
    return res.status(200).json({ members: MembersArray });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const fetchParticularDepartmentForCentral = async (req, res) => {
  try {
    const { committee_name } = req.member;
    const MembersArray = await Department.find({ committee_name });
    if (!MembersArray)
      return res.status(400).json({ message: "No committee members found" });
    return res.status(200).json({ members: MembersArray });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const logoutDepartment = async (req, res) => {
  //console.log(req.user);
  await Department.findByIdAndUpdate(req.member._id);
  const options = {
    path: "/",
    secure: true,
    sameSite: "None",
  };
  return res
    .status(200)
    .clearCookie("departmentToken", options)
    .json({ message: "Logged out successfully" });
  // .json({
  //   tokens: { accessToken, refreshToken },
  // });
};

export {
  createDepartmentMember,
  loginDepartmentMember,
  updateDepartmentMember,
  getCommitteMembers,
  fetchParticularDepartment,
  fetchParticularDepartmentForCentral,
  createBulk,
  logoutDepartment,
  getDepartmentMember,
};
